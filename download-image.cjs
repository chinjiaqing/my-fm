const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');
const { v1 } = require("uuid")

// 创建目标目录（如果不存在）
const targetDir = path.join(__dirname, 'src/assets', 'images');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

/**
 * 下载网络图片到本地
 * @param {string} imageUrl - 网络图片URL
 * @param {string} [filename] - 保存文件名（可选）
 * @returns {Promise<string>} 保存的本地文件路径
 */
async function downloadImage(imageUrl, filename) {
    // 解析URL获取协议
    const parsedUrl = new URL(imageUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    // 自动生成文件名（如果未提供）
    const ext = path.extname(parsedUrl.pathname) || '.jpg';
    const finalFilename = filename || v1();
    const outputPath = path.join(targetDir, finalFilename + ext);

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);

        protocol.get(imageUrl, (response) => {
            // 处理重定向
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadImage(response.headers.location, filename)
                .then(resolve)
                .catch(reject);
            }

            // 验证内容类型
            const contentType = response.headers['content-type'];
            if (!contentType?.startsWith('image/')) {
                file.destroy();
                fs.unlinkSync(outputPath);
                return reject(new Error('Invalid content type: ' + contentType));
            }

            // 管道写入文件
            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve(outputPath);
            });
        })
        .on('error', (err) => {
            file.destroy();
            fs.unlinkSync(outputPath);
            reject(err);
        });
    });
}

// 使用示例
(async () => {
    try {
        const url = '';

        // 方式1：自动命名
        const savedPath1 = await downloadImage(url);
        console.log('Saved at:', savedPath1);
    } catch (err) {
        console.error('Download failed:', err.message);
    }
})();

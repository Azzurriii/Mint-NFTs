const fs = require('fs');
const path = require('path');

// Đọc thư mục assets
const assetsDir = './assets';
const files = fs.readdirSync(assetsDir);

// Lọc ra các file .png và sắp xếp theo số
const pngFiles = files
    .filter(file => file.endsWith('.png') && file !== 'collection.png')
    .sort((a, b) => parseInt(path.parse(a).name) - parseInt(path.parse(b).name));

// Đọc mẫu collection.json
const collectionTemplate = JSON.parse(fs.readFileSync(path.join(assetsDir, 'collection.json'), 'utf8'));

// Tạo metadata cho mỗi file png
pngFiles.forEach((file, index) => {
    const fileNumber = path.parse(file).name;
    const metadata = {
        ...collectionTemplate,
        name: `Certificate of Completion #${fileNumber}`,
        image: `assets/${file}`,
        edition: parseInt(fileNumber) + 1,
        attributes: [
            {
                trait_type: "Course Name",
                value: `Blockchain Basics ${fileNumber}`
            },
            {
                trait_type: "Completion Date",
                value: new Date(Date.now() + index * 86400000).toISOString().split('T')[0] // Tăng ngày mỗi lần lặp
            },
            {
                trait_type: "Certificate ID",
                value: `CERT-${fileNumber.padStart(3, '0')}`
            }
        ],
        properties: {
            files: [
                {
                    uri: file,
                    type: "image/png"
                }
            ],
            category: "image"
        }
    };

    // Ghi file JSON
    fs.writeFileSync(path.join(assetsDir, `${fileNumber}.json`), JSON.stringify(metadata, null, 2));
});

console.log('Metadata generation completed.');
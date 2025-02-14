const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../markdown/kb/articles.json');

function validateJSONStructure(json) {
    if (!Array.isArray(json)) {
        throw new Error('Root element should be an array');
    }

    json.forEach((item, itemIndex) => {
        if (!item.section) {
            throw new Error(`Item at index ${itemIndex} is missing 'section'. Expected a string.`);
        }
        if (!item.about) {
            throw new Error(`Item at index ${itemIndex} is missing 'about'. Expected a string.`);
        }
        if (!item.slug) {
            throw new Error(`Item at index ${itemIndex} is missing 'slug'. Expected a string.`);
        }
        if (!Array.isArray(item.articles)) {
            throw new Error(`Item at index ${itemIndex} has invalid 'articles'. Expected an array.`);
        }

        item.articles.forEach((article, articleIndex) => {
            if (!article.slug) {
                throw new Error(`Article at index ${articleIndex} in item ${itemIndex} is missing 'slug'. Expected a string.`);
            }
            if (!article.title) {
                throw new Error(`Article at index ${articleIndex} in item ${itemIndex} is missing 'title'. Expected a string.`);
            }
            if (!article.description) {
                throw new Error(`Article at index ${articleIndex} in item ${itemIndex} is missing 'description'. Expected a string.`);
            }
            if (!article.section) {
                throw new Error(`Article at index ${articleIndex} in item ${itemIndex} is missing 'section'. Expected a string.`);
            }
            if (!article.path) {
                throw new Error(`Article at index ${articleIndex} in item ${itemIndex} is missing 'path'. Expected a string.`);
            }
        });
    });
}

try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    validateJSONStructure(jsonData);
    console.log('Validation passed');
} catch (error) {
    console.error('Validation failed:', error.message);
    process.exit(1);
}
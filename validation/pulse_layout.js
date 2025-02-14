const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../markdown/pulse/articles.json');

function validateJSONStructure(json) {
    if (!Array.isArray(json)) {
        throw new Error('Root element should be an array');
    }

    json.forEach((item, itemIndex) => {
        if (!item.slug) {
            throw new Error(`Item at index ${itemIndex} is missing 'slug'. Expected a string.`);
        }
        if (!item.title) {
            throw new Error(`Item at index ${itemIndex} is missing 'title'. Expected a string.`);
        }
        if (!item.description) {
            throw new Error(`Item at index ${itemIndex} is missing 'description'. Expected a string.`);
        }
        if (!Array.isArray(item.sections)) {
            throw new Error(`Item at index ${itemIndex} has invalid 'sections'. Expected an array.`);
        }

        item.sections.forEach((section, sectionIndex) => {
            if (!section.title) {
                throw new Error(`Section at index ${sectionIndex} in item ${itemIndex} is missing 'title'. Expected a string.`);
            }
            if (!section.description) {
                throw new Error(`Section at index ${sectionIndex} in item ${itemIndex} is missing 'description'. Expected a string.`);
            }
            if (!section.path) {
                throw new Error(`Section at index ${sectionIndex} in item ${itemIndex} is missing 'path'. Expected a string.`);
            }
            if (!section.slug) {
                throw new Error(`Section at index ${sectionIndex} in item ${itemIndex} is missing 'slug'. Expected a string.`);
            }

            if (section.data !== null && !Array.isArray(section.data)) {
                throw new Error(`Section 'data' at index ${sectionIndex} in item ${itemIndex} should be an array or null.`);
            }

            if (Array.isArray(section.data)) {
                section.data.forEach((dataItem, dataIndex) => {
                    if (!dataItem.title) {
                        throw new Error(`Data item at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} is missing 'title'. Expected a string.`);
                    }
                    if (!dataItem.description) {
                        throw new Error(`Data item at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} is missing 'description'. Expected a string.`);
                    }
                    if (!dataItem.date) {
                        throw new Error(`Data item at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} is missing 'date'. Expected a string.`);
                    }
                    if (!dataItem.path) {
                        throw new Error(`Data item at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} is missing 'path'. Expected a string.`);
                    }
                    if (!dataItem.slug) {
                        throw new Error(`Data item at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} is missing 'slug'. Expected a string.`);
                    }
                    if (!Array.isArray(dataItem.tags)) {
                        throw new Error(`Data item 'tags' at index ${dataIndex} in section ${sectionIndex} of item ${itemIndex} should be an array.`);
                    }
                });
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
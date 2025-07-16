const { reporters } = require("mocha");

module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: '.',
            outputName: 'jest-junit.xml',
        }]
    ]
};
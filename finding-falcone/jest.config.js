module.exports = {
    moduleDirectories: ['src', 'node_modules'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    setupTestFrameworkScriptFile: './setupEnzyme.js',
    collectCoverageFrom: [
        'src/*.js',
        'src/**/*.{js|jsx}'
    ],
    coverageReporters: ['json', 'lcov', 'text-summary'],
    coverageThreshold: {
        global: {
            statements: 20,
            branches: 0,
            functions: 20,
            lines: 20
        }
    },
    testPathIgnorePatterns: [
        './setupEnzyme.js',
        './src/logo.svg',
        './src/*.css',
        'coverage',
        './node_modules/'
    ],
    coveragePathIgnorePatterns: [],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
};

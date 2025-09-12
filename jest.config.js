module.exports = {
    testEnvironment: 'node',
    testMatch: [
        '**/src/**/*.test.js',
        '**/src/**/*.test.ts'
    ],
    collectCoverageFrom: [
        'src/**/*.js',
        'src/**/*.ts',
        '!src/**/*.test.js',
        '!src/**/*.test.ts',
        '!src/index.js',
        '!src/types.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    verbose: true,
    testTimeout: 10000,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};

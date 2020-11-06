module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
                paths: {
                    '@apestaartje/lens/*': ['src/*'],
                },
            },
        },
    },
    moduleNameMapper: {
        '^@apestaartje/lens/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest',
};

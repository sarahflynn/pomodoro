module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js*',
    '**/*.ts*',
    '!node_modules/**',
    '!__tests__/**',
  ],
  coverageDirectory: 'reports/coverage',
  coverageReporters: ['json-summary', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 60,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        ancestorSeparator: ' › ',
        classNameTemplate: '{classname}-{title}',
        outputDirectory: './reports',
        outputName: './junit.xml',
        suiteName: 'jest tests',
        titleTemplate: '{classname}-{title}',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  roots: ['<rootDir>/__tests__'],
  setupTestFrameworkScriptFile: '<rootDir>/__tests__/setup.js',
  testRegex: '__tests__/.*.(spec|test).(js|ts)x?$',
  testResultsProcessor: './node_modules/jest-html-reporter',
  transform: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};

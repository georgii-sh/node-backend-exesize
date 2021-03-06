module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/index.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  modulePaths: [],
  moduleNameMapper: {
    '^application/(.*)': '<rootDir>/src/application/$1',
    '^modules/(.*)': '<rootDir>/src/modules/$1',
    '^middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '^commons/(.*)': '<rootDir>/src/commons/$1',
    '^db/(.*)': '<rootDir>/src/db/$1',
    '^config(.*)': '<rootDir>/src/config$1',
  },
  collectCoverage: false,
}

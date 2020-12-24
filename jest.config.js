module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/index.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  modulePaths: [],
  moduleNameMapper: {
    '^application/(.*)': '<rootDir>/src/application/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^config(.*)': '<rootDir>/src/config$1',
  },
  collectCoverage: false,
}

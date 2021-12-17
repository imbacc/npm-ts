module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/tests/'],
  collectCoverage: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', 'config', 'esdocs', 'docs'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/libs/$1'
  },
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$']
}

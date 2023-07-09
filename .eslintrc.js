module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',  
  },
  plugins: [
    '@typescript-eslint'  // Для TypeScript.
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended', 
        'plugin:@typescript-eslint/recommended-requiring-type-checking',   
      ],
      parserOptions: {
        sourceType: 'script',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      }
    }
  ],
  rules: {
    semi: ['error', 'always'],  // Всегда добавлять точку с запятой в конце утверждения.
    indent: ['error', 2],  // Отступ — это два пробела.
  },
}

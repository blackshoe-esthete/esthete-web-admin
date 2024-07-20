### yarn berry pnp로 패키지 관리하기
1. `yarn set version berry`
2. .yarnrc.yml 파일에 NodeLinker 설정
3. `yarn install`
4. `yarn dlx @yarnpkg/sdks vscode` ts와 prettier 관련 경로 설정?
5. `yarn add -D prettier eslint-plugin-prettier eslint-config-prettier`
6. .eslintrc.json에 프리티어 관련 설정
```
{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
7. .prettierrc 파일 설정
8. `yarn dlx @yarnpkg/sdks vscode` eslint와 prettier 관련 경로 설정?

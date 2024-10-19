## Yarn Berry PnP 환경 설정 가이드

이 가이드는 **Yarn Berry**와 **Plug'n'Play (PnP)** 기능을 활용하여 패키지 의존성을 관리하는 방법을 설명합니다. Yarn Berry를 사용하면 `node_modules` 폴더 없이도 빠르고 효율적으로 패키지를 관리할 수 있습니다.

### 1. Yarn 설치 및 버전 업그레이드

먼저, Yarn이 최신 버전인지 확인하고, 아니라면 최신 버전으로 업그레이드합니다.

```bash
npm install -g yarn
```

프로젝트에서 Yarn을 Berry 버전으로 설정하려면 아래 명령어를 실행합니다:

```bash
yarn set version berry
```

이 명령어는 프로젝트 루트에 `.yarnrc.yml` 파일을 생성합니다.

### 2. PnP 모드 활성화

PnP 모드를 활성화하려면, 생성된 `.yarnrc.yml` 파일에 아래 설정이 포함되어 있는지 확인합니다:

```yaml
nodeLinker: pnp
```

이 설정을 통해 Yarn이 PnP 모드로 동작하게 됩니다.

### 3. 패키지 설치

PnP 모드에서 패키지를 설치하려면 `yarn install`을 실행합니다:

```bash
yarn install
```

이 명령어를 실행하면 `node_modules` 폴더는 생성되지 않고, 패키지는 Yarn의 캐시에 저장됩니다.

### 4. Editor SDK 설정

코드 편집기에서 PnP 환경을 인식할 수 있도록 설정합니다.

#### VSCode 설정:

VSCode에서는 아래 명령어를 사용해 Yarn SDK를 설정합니다:

```bash
yarn dlx @yarnpkg/sdks vscode
```

이 명령어는 `.vscode/settings.json` 파일에 필요한 설정을 자동으로 추가합니다.

#### WebStorm 또는 기타 편집기 설정:

다른 IDE를 사용하는 경우에는, 해당 편집기용 SDK를 설정합니다:

```bash
yarn dlx @yarnpkg/sdks intellij # WebStorm 예시
```

### 5. Zero-Install 설정 (선택 사항)

Zero-Install 기능을 사용하면, 팀원들이 별도의 패키지 설치 없이 동일한 환경을 사용할 수 있습니다.

#### `.yarn/cache` 폴더 Git에 추가:

Zero-Install을 활성화하려면 `yarn install` 후 생성된 `.yarn/cache` 폴더를 버전 관리에 추가합니다:

```bash
git add .yarn/cache
```

이를 통해 다른 개발자들도 동일한 의존성을 설치 없이 사용할 수 있습니다.

### 6. PnP 디버깅

PnP 설정 중 문제가 발생하면 아래 명령어로 디버깅할 수 있습니다:

```bash
yarn pnpify --sdk
```

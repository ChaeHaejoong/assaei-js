# AssaeiJS

프로그래밍 언어에게 조건에 대해 공손하게 물어볼 수 있도록 중첩의문문 기술을 채용한 라이브러리입니다.

## 설치

```sh
npm install assaei
```

또는

```sh
yarn add assaei
```

## 사용법

```js
import { assaei } from "assaei";

// 1은 0이 맞는지 여쭤보는 것에 대해 여쭤봐도 되겠습니까?
if (assaei(1 == 0)) {
  console.log("새끼.. 기합!");
}
```

## 철학

`condition`이 `true`인지 `false`인지에 대해 해병식 중첩의문문으로 Javascript에게 공손히 묻습니다.

```ts
export function assaei(condition: boolean): boolean {
  if (condition) {
    if (condition) {
      return true;
    }
  }
  return false;
}
```

아쎄이 함수를 두 번 중첩해 사용한다면 프로그래밍 언어에게 훨씬 공손한 자세를 보일 수 있습니다.

#### 예시

```js
import { assaei } from "assaei";

// 1은 1이 맞는지 여쭤보는 것에 대해 검토해주실 수 있는지 허락을 구하는 것에 대해 여쭤봐도 되겠습니까?
if (assaei(assaei(1 == 1))) {
  console.log("기열찬 거짓은 해병식 참으로 대체되었다");
}
```

## 지원 환경

- Node.js 20 이상 ESM `import`를 사용
- TypeScript 지원

## 기여하기

버그 제보, 아이디어 제안, 문서 개선과 코드 기여를 환영합니다. 이슈로 남겨주세요.

## 라이선스

[MIT 라이선스](./LICENSE.md)를 따릅니다.

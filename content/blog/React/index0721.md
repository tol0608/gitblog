---
title: JSX
date: "2023-07-21"
description: "React"
tags:
  - 웹개발
  - 프로그래밍
  - JAVASCRIPT
  - React
  - JSX
---

## JSX란?

JSX는 자바스크립트 XML의 약어로, UI 컴포넌트를 위한 자바스크립트 확장 문법입니다. React에서 사용되며, JSX로 작성된 코드는 바벨(Babel)과 같은 도구를 사용하여 자바스크립트 코드로 변환됩니다.

### 예시

다음은 JSX로 작성된 예시입니다.

```jsx
const element = <h1>Hello, world!</h1>;

```

위 코드는 다음과 같은 자바스크립트 코드로 변환됩니다.

```
const element = React.createElement("h1", null, "Hello, world!");

```

JSX는 HTML과 유사한 문법을 사용하여 UI 컴포넌트를 작성할 수 있습니다.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Greeting name="World" />;

```

위 코드는 다음과 같은 HTML 코드로 변환됩니다.

```html
<h1>Hello, World!</h1>

```

JSX는 React에서 컴포넌트를 작성하는 데 매우 유용한 문법입니다.
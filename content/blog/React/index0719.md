---
title: forEach 와 map
date: "2023-07-19"
description: "React"
tags:
  - 웹개발
  - 프로그래밍
  - JAVASCRIPT
  - React
---

### forEach와 map

`forEach`와 `map`은 모두 JavaScript 배열에서 사용할 수 있는 메소드입니다. 둘 다 배열의 모든 요소에 대해 반복 작업을 수행하지만, 적용 방식이 다릅니다.

`forEach`는 반복 작업을 수행하면서 새로운 배열을 반환하지 않습니다. 대신, 배열의 각 요소에 대해 콜백 함수를 실행합니다. 이 콜백 함수는 배열 요소와 해당 인덱스를 인수로 받습니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Index ${index}의 값은 ${number}입니다.`);
});
```

`map`은 반면에 새로운 배열을 반환합니다. 이 새로운 배열은 원래 배열의 각 요소에 대해 콜백 함수를 실행한 결과입니다. 이 콜백 함수는 각 요소를 인수로 받으며, 처리된 결과는 새로운 배열에 추가됩니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

```

따라서, 원래 배열의 값을 변경하거나 새로운 배열을 반환해야 하는 경우에는 `map`을 사용하는 것이 더 적합합니다. 그러나 원래 배열의 값을 변경하지 않고 각 요소에 대해 일련의 작업을 수행하려는 경우에는 `forEach`를 사용하는 것이 더 적합합니다.

### 화살표 함수

화살표 함수(arrow function)는 함수 표현식을 간결하게 작성할 수 있는 ES6 기능 중 하나입니다. 화살표 함수를 사용하면 함수를 작성하는 데 들어가는 공간과 시간을 줄일 수 있습니다.

예를 들어, 다음과 같이 `map` 함수를 사용하는 일반적인 방법은 다음과 같습니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
```

화살표 함수를 사용하면 더 간결하게 작성할 수 있습니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
```

화살표 함수는 다음과 같은 특징이 있습니다.

- `function` 키워드 대신 `=>` 기호를 사용합니다.
- **함수의 인수가 하나뿐이면** 괄호를 생략할 수 있습니다.
- **함수의 본문이 한 줄인 경우** 중괄호를 생략할 수 있습니다. 이때, 본문의 결과값이 반환됩니다. 예를 들어, `number * 2` 대신 `number => number * 2`와 같이 작성할 수 있습니다.

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
```

화살표 함수는 코드를 간결하게 만들어주기 때문에 React 컴포넌트에서도 자주 사용됩니다. 컴포넌트의 메소드를 작성할 때에도 화살표 함수를 사용할 수 있습니다.

```jsx
class MyComponent extends React.Component {
  handleClick = () => {
    console.log('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}
```

화살표 함수의 또 다른 장점은, `this` 키워드의 동작 방식이 일반 함수와 다르다는 점입니다. 함수가 어디서 실행되는지에 따라 `this` 키워드가 가리키는 대상이 달라지는 일반 함수와 달리, 화살표 함수는 항상 상위 스코프의 `this` 값을 사용합니다. 이로 인해, 화살표 함수를 사용하면 `this` 키워드를 사용하는 곳에서 생기는 오류를 방지할 수 있습니다.
---
title: 엘리먼트와 컴포넌트
date: "2023-07-20"
description: "React"
tags:
  - 웹개발
  - 프로그래밍
  - JAVASCRIPT
  - React
  - 컴포넌트
  - 엘리먼트
---

## 엘리먼트

### Key

Key는 React에서 동적으로 생성되는 컴포넌트 리스트에서 각 요소가 고유하게 식별되도록 돕는 역할을 합니다. Key는 React가 컴포넌트 리스트를 업데이트할 때 사용됩니다. Key가 없는 경우 리스트의 순서가
바뀌거나 아이템이 추가/삭제될 때 React는 이전에 렌더링된 결과를 기반으로 변경사항을 계산하게 되고, 이때 변경사항이 예상과 다를 수 있습니다. Key를 사용하면 React는 각 아이템이 고유한 ID를 가지고
있기 때문에 변경사항을 더 정확하게 계산할 수 있습니다.

```jsx
var items = ['연어 500그램', '잣 1 컵', '버터 상추 2컵', '옐로 스쿼시(Yellow Squash, 호박의 한 종류) 1개', '올리브 오일 1/2 컵', '마늘 3 쪽']
var dish = React.createElement('ul', {className: 'ingredients'},
    items.map(ingredients => React.createElement('li', null, ingredients))
);
console.log('dish', dish);

function init() {
    var container = document.querySelector('.react-container');

    ReactDOM.render(dish, container);
}

window.addEventListener('load', init);
```

```jsx
var items = ['연어 500그램', '잣 1 컵', '버터 상추 2컵',
    '옐로 스쿼시(Yellow Squash, 호박의 한 종류) 1개',
    '올리브 오일 1/2 컵', '마늘 3 쪽']
var dish = React.createElement('ul', {className: 'ingredients'},
    items.map((ingredients, i) => React.createElement('li', {key: i}, ingredients))
);
console.log('dish', dish);

function init() {
    var container = document.querySelector('.react-container');
    ReactDOM.render(dish, container);
}

window.addEventListener('load', init);
```

위 코드는 React를 사용하여 `items`라는 리스트를 표시하는 `<ul>` 엘리먼트를 생성하는 예제입니다. `items` 리스트를 `map()` 함수를 사용하여 `<li>` 엘리먼트로 변환하고, `key`
prop을 사용하여 각각의 `<li>` 엘리먼트에 고유한 ID 값을 부여합니다. 이렇게 함으로써 React는 업데이트시 더욱 정확하게 바뀐 부분을 인식할 수 있게 됩니다.
마지막으로, `ReactDOM.render()` 함수를 사용하여 `dish` 엘리먼트를 `.react-container`에 렌더링합니다.

### 컴포넌트

컴포넌트는 UI를 구성하는 독립적인 모듈입니다. 컴포넌트를 사용하면 UI를 여러 개의 재사용 가능한 조각으로 나눌 수 있습니다. 이를 통해 코드의 재사용성과 유지보수성이 증가하게 됩니다.

React에서 모든 UI 요소는 컴포넌트로 나눌 수 있습니다. 이렇게 나눈 컴포넌트들은 중첩하여 사용할 수 있으며, 각각의 컴포넌트는 독립적으로 작동합니다.

### 예시

```jsx
class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <Greeting name="React"/>,
    document.getElementById('root')
);
```

위 코드는 `Greeting`이라는 컴포넌트를 생성하고, `ReactDOM.render()` 함수를 사용하여 `Greeting` 컴포넌트를 렌더링하는 예제입니다. `Greeting` 컴포넌트는 `name` prop을
받아와서 `Hello, {name}!`이라는 메시지를 표시합니다. 이렇게 하면 `name` prop이 변경될 때마다 컴포넌트가 업데이트되어 새로운 메시지를 표시하게 됩니다.

```jsx
function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleClick() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times.</p>
                <Button
                    onClick={() => this.handleClick()}
                    label="Click me"
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);
```

위 코드는 `Button`과 `Counter`라는 두 개의 컴포넌트를 생성하고, `ReactDOM.render()` 함수를 사용하여 `Counter` 컴포넌트를 렌더링하는 예제입니다. `Button`
컴포넌트는 `onClick` prop을 받아와서 버튼을 클릭했을 때 `onClick` 함수를 호출합니다. `Counter` 컴포넌트는 `count` state를 가지고 있으며, 버튼을 클릭할 때마다 `count`
값을 증가시킵니다. 이렇게 하면 화면에는 'You clicked {count} times'라는 메시지와 'Click me'라는 버튼이 표시됩니다.

### 함수형 컴포넌트

함수형 컴포넌트는 함수로 구현된 컴포넌트이며, `props`를 인자로 받아서 JSX를 반환합니다.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

함수형 컴포넌트는 상태(state)를 가지지 않으며, 라이프사이클 메서드(`componentDidMount`, `componentWillUnmount`, 등)를 사용할 수 없습니다. 하지만 컴포넌트의 역할이 단순한
경우, 클래스형 컴포넌트 대신 함수형 컴포넌트를 사용하는 것이 더 효율적입니다.

함수형 컴포넌트의 장점:

- 코드가 간결하고 명확합니다.
- 클래스형 컴포넌트보다 성능이 더 좋습니다.
- 상태를 가지지 않으므로 예측 가능하며 테스트하기 쉽습니다.

함수형 컴포넌트의 단점:

- 라이프사이클 메서드를 사용할 수 없습니다.
- 상태를 가지지 않으므로, 상태를 변경할 수 없습니다.

### 클래스형 컴포넌트

클래스형 컴포넌트는 `React.Component` 클래스를 상속받아서 구현됩니다. `render()` 메서드를 구현하여 JSX를 반환합니다.

```jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

s
```

클래스형 컴포넌트는 상태(state)를 가지며, 라이프사이클 메서드(`componentDidMount`, `componentWillUnmount`, 등)를 사용할 수 있습니다. 상태를 변경할 수 있으므로, 상태에
따라 UI를 변경해야 하는 경우 클래스형 컴포넌트를 사용하는 것이 좋습니다.

클래스형 컴포넌트의 장점:

- 상태(state)를 가지므로, 상태에 따라 UI를 변경할 수 있습니다.
- 라이프사이클 메서드를 사용할 수 있습니다.

클래스형 컴포넌트의 단점:

- 코드가 복잡하고, 함수형 컴포넌트보다 성능이 더 떨어집니다.
- 상태(state)를 가지므로 예측하기 어렵고, 테스트하기 어렵습니다.

### 예시

```jsx
// 함수형 컴포넌트 예제
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// 클래스형 컴포넌트 예제
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
```

위 예제에서 `Welcome` 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트 두 가지 방식으로 구현되었습니다. `Welcome` 컴포넌트는 `props`를 받아서 `Hello, {props.name}!`이라는
메시지를 표시합니다.

### 옛날 방식과 요즘 클래스

```jsx
    // 옛날방식 -> 생성자 함수를 이용한 명시적...
    // 함수이름이 대문자로 시작하면 생성자 함수
function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function () {
    console.log('이번 휴가는 ' + this.destination + '으로 ' + this.length + '떠남')
};

var obj = new Vacation('하와이', 10);
obj.print();
```

```jsx
    class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log('이번 휴가는 ' + this.destination + '으로 ' + this.length + '떠남')
    };
}

obj = new Vacation('하와이', 10);
obj.print();
```

### 객체 구조 분해

객체 구조 분해는 자바스크립트의 기능 중 하나로, 객체에서 속성을 추출하고 변수에 할당하는 것을 더 간결하고 가독성 높은 방법으로 할 수 있게 합니다.

다음은 예시입니다:

```jsx
const person = {
    name: 'John',
    age: 30,
    location: 'New York'
};

const {name, age, location} = person;

console.log(name);      // 출력: 'John'
console.log(age);       // 출력: 30
console.log(location);  // 출력: 'New York'
```

이 예시에서는 `person`이라는 객체가 세 개의 속성, 즉 `name`, `age`, `location`을 가지고 있습니다. 객체 구조 분해를 사용하여 이러한 속성들을 추출하고 같은 이름의 변수에 할당합니다.
그러면 이 변수들을 사용하여 객체에서 해당 값을 가져올 수 있습니다.

객체 구조 분해는 함수 매개변수를 다룰 때 매우 유용합니다. 다음은 예시입니다:

```jsx
function printPersonInfo({name, age, location}) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Location: ${location}`);
}

const person = {
    name: 'John',
    age: 30,
    location: 'New York'
};

printPersonInfo(person);
```

이 예시에서는 객체를 매개변수로 받는 `printPersonInfo` 함수를 정의하고, 객체 구조 분해를 사용하여 `name`, `age`, `location` 속성을 추출합니다. 그런 다음 이 변수들을 사용하여
객체에서 해당 값을 출력합니다.

객체 구조 분해는 중첩된 객체와 배열에서도 사용할 수 있습니다. 다음은 예시입니다:

```jsx
const person = {
    name: 'John',
    age: 30,
    location: {
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['reading', 'traveling', 'hiking']
};

const {name, location: {city}, hobbies: [firstHobby]} = person;

console.log(name);        // 출력: 'John'
console.log(city);        // 출력: 'New York'
console.log(firstHobby);  // 출력: 'reading'
```

이 예시에서는 중첩된 속성과 배열이 포함된 객체를 사용합니다. 객체 구조 분해를 사용하여 중첩된 `location` 속성에서 `city` 속성과 `hobbies` 배열에서 첫 번째 취미를 추출합니다.

총괄적으로, 객체 구조 분해는 자바스크립트의 강력한 기능 중 하나로, 코드를 더 간결하고 가독성 좋게 만들어 줍니다.

### 리터럴객체 = 암시적 방법으로 만든 객체 → 리터럴객체 개선

리터럴객체는 변수에 할당되는 객체 표기법 중 하나로, 중괄호({}) 안에 속성(key)과 값(value)을 쉼표(,)로 구분하여 작성하는 것입니다. 이를 통해 객체를 쉽고 간편하게 생성할 수 있습니다.

예를 들어, 다음과 같은 객체가 있다고 가정해봅시다.

```jsx
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
```

위 예시에서 `person`은 리터럴객체로 생성되었습니다. 객체 리터럴 표기법을 사용하여 `name`, `age`, `city` 속성을 정의하고, 해당 값으로 각각 `'John'`, `30`, `'New York'`
을 할당했습니다.

리터럴객체는 객체를 생성하고 초기화하는 데 사용할 수 있습니다. 객체 리터럴 표기법은 복잡한 객체나 중첩된 객체를 만들 때도 유용합니다. 예를 들어, 다음과 같은 중첩된 객체를 만들 수 있습니다.

```jsx
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};
```

위 예시에서 `person` 객체는 `address` 속성을 가지고 있으며, 이 속성은 또다른 중첩된 객체를 가지고 있습니다. 이렇게 객체를 중첩하여 구성하면, 복잡한 데이터를 보다 쉽게 관리할 수 있습니다.

리터럴객체는 코드를 더 간결하고 가독성 좋게 만들어주는 장점이 있습니다. 또한, 객체를 생성할 때 일반적으로 사용되는 방식이기 때문에 익숙해질 필요가 있습니다.

### 객체 리터럴 개선

```jsx
var name = '손흥민';
var gender = '남자';
var age = 31;
var play = function () {
    console.log(this.name + '이 축구를 때림')
}

var person = {name, gender, age, play};
person.play()

// 보이는 값 -> 손흥민이 축구를 때림
```
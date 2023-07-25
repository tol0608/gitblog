---
title: CSS의 기초 5
date: "2023-06-30"
description: "웹개발과 CSS"
tags:
  - 웹개발
  - 프로그래밍 기초
  - CSS
---

## transform 변형 함수

CSS Transform 속성은 HTML 요소를 2D 또는 3D 공간에서 변형하는 데 사용됩니다. 이 속성을 사용하면 요소의 크기, 위치, 회전, 기울기 등을 변형할 수 있습니다.

### 변형 함수(Transform Functions)

변형 함수는 CSS Transform 속성에 사용되는 함수입니다. 다음은 일부 변형 함수의 예시입니다.

    - `translate()` : 요소를 X, Y (그리드 시스템) 축으로 이동합니다.
    - `rotate()` : 요소를 지정된 각도(도) 만큼 회전시킵니다.
    - `scale()` : 요소의 크기를 지정된 배율만큼 변경합니다.
    - `skew()` : 요소를 X, Y 축으로 지정된 각도만큼 기울입니다.

다음은 `translate()`, `rotate()`, `scale()`, `skew()` 함수를 사용한 예시입니다.

```css
    .box {
    /* X축으로 50px 이동 */
    transform: translateX(50px);
    /* 45도 회전 */
    transform: rotate(45deg);
    /* 크기를 1.5배 확대 */
    transform: scale(1.5);
    /* X축으로 30도 기울임 */
    transform: skewX(30deg);
}
```

`perspective` 옵션은 3D 변환을 적용할 때 사용하는 속성으로, 요소에 3D 변환을 적용할 때 원근 효과를 적용할 수 있습니다. 이 속성의 값은 요소에서 떨어져 있는 거리를 나타내며, 값이 작을수록 변환의
강도가 강해지고 값이 클수록 변환의 강도가 약해집니다. 다음은 `perspective` 속성을 사용한 예시입니다.

```css
.parent {
    /* 원근 효과 적용 */
    perspective: 1000px;
}

.child {
    /* 요소를 3D 변환 */
    transform: translateZ(50px);
}
```

이 예시에서 `.parent` 요소에 `perspective` 속성이 적용되어 있고, `.child` 요소는 `translateZ()` 함수를 사용하여 Z축으로 50px만큼 이동합니다. 이 때, `.child`
요소는 `.parent` 요소에 대해 원근 효과가 적용된 상태로 3D 변환되기 때문에, `.child` 요소는 `.parent` 요소에 가까이 위치할수록 원근 효과가 강해지고, 멀어질수록 원근 효과가 약해집니다.

## transition 속성

트랜지션(transition)은 CSS에서 애니메이션을 구현할 때 사용하는 속성입니다. 이 속성을 사용하면 요소의 속성을 변경할 때, 변경되는 속성의 시작 값과 끝 값을 지정하여 자연스러운 애니메이션 효과를
구현할 수 있습니다.

다음은 `transition` 속성의 예시입니다.

```css
    .box {
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s;
}

.box:hover {
    width: 200px;
}
```

이 예시에서 `.box` 요소는 초기 상태에서 `width` 속성이 100px로 지정되어 있습니다. 마우스를 `.box` 요소 위로 가져갈 때, `width` 속성이 2초 동안 100px에서 200px로
변경됩니다. 이때, `transition` 속성에 `width` 값을 지정하여, `width` 속성의 애니메이션 효과를 구현합니다.

### transition 속성

| 종류                         | 설명                                                                                                 |
          |----------------------------|----------------------------------------------------------------------------------------------------|
| transition-property        | 트랜지션의 대상을 지정합니다.                                                                                   |
| transition-duration        | 트랜지션을 실행할 시간을 지정합니다.                                                                               |
| transition-timing-function | 트랜지션의 실행 형태를 지정합니다.                                                                                |
| transition-delay           | 트랜지션의 지연 시간을 지정합니다.                                                                                |
| transition                 | transition-property transition-duration transition-timing-function transition-delay 속성을 한번에 지정합니다. |

### transition-timing-function 속성

| 종류                       | 설명                                                                                  |
          |--------------------------|-------------------------------------------------------------------------------------|
| ease                     | 천천히 시작하여 빠르게 끝나는 효과                                                                 |
| linear                   | 일정한 속도로 실행되는 효과                                                                     |
| ease-in                  | 천천히 시작하는 효과                                                                         |
| ease-out                 | 천천히 끝나는 효과                                                                          |
| ease-in-out              | 천천히 시작하고 천천히 끝나는 효과                                                                 |
| cubic-bezier(n, n, n, n) | 사용자 지정 베지어 곡선 함수를 사용하여 트랜지션을 실행합니다. 네 개의 값을 지정하여 시작 지점에서 끝 지점까지의 계단 함수를 제어할 수 있습니다. |

## animation 속성

CSS `animation` 속성은 CSS를 사용하여 요소에 애니메이션 효과를 적용할 때 사용하는 속성입니다. 이 속성은 `@keyframes` 규칙을 사용하여 애니메이션을 정의하고, `animation` 속성을
사용하여 애니메이션을 적용합니다.

### animation 속성

`animation` 속성은 다음과 같은 속성들로 구성됩니다.

| 종류                         | 설명                             |
|----------------------------|--------------------------------|
| @keyframe                  | 애니메이션 바뀌는 지점을 지정합니다.           |
| animation-name             | 애니메이션 이름을 지정합니다.               |
| animation-duration         | 애니메이션 지속 시간을 지정합니다.            |
| animation-timing-function  | 애니메이션 실행 형태를 지정합니다.            |
| animation-delay            | 애니메이션 지연 시간을 지정합니다.            |
| animation-iteration-count  | 애니메이션 반복 회수를 지정합니다.            |
| animation-direction        | 애니메이션 재생 방향을 지정합니다.            |
| animation-fill-mode        | 애니메이션 실행 전과 후 요소의 스타일을 지정합니다.  |
| animation-play-state       | 애니메이션 재생 상태를 지정합니다.            |

다음은 `animation` 속성의 예시입니다.

```css
.box {
    animation-name: example;
    animation-duration: 2s;
}

@keyframes example {
    from {
        background-color: red;
    }
    to {
        background-color: yellow;
    }
}

/* 아래는 실제로 이미지가 원모양으로 무한하게 돌아가는 예시 */

img {
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: 5px 5px 30px 2px #000;
    perspective: inherit;
    animation: rotate 1.5s infinite;
}

@keyframes rotate {
    from {
        transform: perspective(200px) rotateY(0deg);
    }
    50% {
        transform: perspective(200px) rotateY(180deg);
    }
    to {
        transform: perspective(200px) rotateY(360deg);
    }
}
```

이 예시에서는 `.box` 요소에 `animation` 속성이 적용되어 있으며, `@keyframes` 규칙에 따라 `background-color` 속성이 2초 동안 빨간색에서 노란색으로 변경됩니다.
두 번째 예시는 `img` 요소에 `animation` 속성이 적용되어 있으며, `@keyframes` 규칙에 따라 이미지가 `rotateY` 360도로 무한하게 회전하고, `perspective (200px)`
를 통해 원근감을 추가한 예제입니다.

### animation-timing-function 속성

`animation-timing-function` 속성은 애니메이션의 실행 형태를 지정하는데 사용됩니다. 이 속성에 지정할 수 있는 값은 다음과 같습니다.

| 종류                       | 설명                                                                                     |
|--------------------------|----------------------------------------------------------------------------------------|
| ease                     | 천천히 시작하여 빠르게 끝나는 효과                                                                    |
| linear                   | 일정한 속도로 실행되는 효과                                                                        |
| ease-in                  | 천천히 시작하는 효과                                                                            |
| ease-out                 | 천천히 끝나는 효과                                                                             |
| ease-in-out              | 천천히 시작하고 천천히 끝나는 효과                                                                    |
| cubic-bezier(n, n, n, n) | 사용자 지정 베지어 곡선 함수를 사용하여 애니메이션을 실행합니다. 네 개의 값을 지정하여 시작 지점에서 끝 지점까지의 계단 함수를 제어할 수 있습니다.   |

## 반응형 웹과 미디어 쿼리

반응형 웹(Responsive Web)은 PC, 스마트폰, 태블릿 PC 등 다양한 기기의 화면 크기에 맞춰서 웹 페이지의 레이아웃과 디자인이 자동으로 변화하는 것을 말합니다. 이를 위해 미디어 쿼리(Media
Query)를 사용합니다.

미디어 쿼리는 CSS3에서 추가된 기능으로, 미디어 타입(media type)과 미디어 특성(media feature)을 이용해서 특정 미디어에만 스타일을 적용할 수 있습니다. 예를 들어, 스마트폰 화면에서는
네비게이션 바를 숨기고 메뉴 버튼을 보여주는 등의 작업을 할 수 있습니다.

미디어 쿼리는 `@media` 규칙으로 사용합니다. 다음은 미디어 쿼리를 사용한 예시입니다.

```css
    @media screen and (max-width: 768px) {
    /* 화면 가로폭이 768px 이하일 때 */
    .nav {
        display: none;
    }

    .menu-btn {
        display: block;
    }
}
```

이 예시에서는 화면 가로폭이 768px 이하일 때, `.nav` 요소를 숨기고 `.menu-btn` 요소를 보여주는 작업을 합니다.
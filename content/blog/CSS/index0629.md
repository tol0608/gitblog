---
title: CSS의 기초 4
date: "2023-06-29"
description: "웹개발과 CSS"
tags:
  - 웹개발
  - 프로그래밍 기초
  - CSS
---

## 배경색과 배경 범위 지정하기

CSS `background` 속성은 요소의 배경색과 이미지, 반복, 위치 등을 지정할 수 있습니다. `background` 속성은 웹 페이지의 디자인과 레이아웃을 통제하는 데 중요한 역할을 합니다.

- `background-color`: 배경색 지정
    - `background-color` 속성은 요소의 배경 색상을 지정합니다. `background-color` 속성은 다양한 값을 가질 수 있습니다. 색상 이름, RGB 값, 16진수 값 등을 사용할 수
      있습니다.
- `background-image`: 배경 이미지 지정
    - `background-image` 속성은 요소의 배경 이미지를 지정합니다. `background-image` 속성을 통해 이미지 파일의 URL을 지정할 수 있습니다.
- `background-repeat`: 배경 이미지 반복 여부 지정
    - `background-repeat` 속성은 배경 이미지를 반복할 지 여부를 지정합니다. `background-repeat` 속성
      값으로 `repeat`, `repeat-x`, `repeat-y`, `no-repeat` 등을 사용할 수 있습니다.
- `background-position`: 배경 이미지 위치 지정
    - `background-position` 속성은 배경 이미지의 위치를 지정합니다. `background-position` 속성
      값으로 `top`, `bottom`, `right`, `left`, `center` 등을 사용할 수 있습니다.
- `background-size`: 배경 이미지 크기 조절
    - `background-size` 속성은 배경 이미지의 크기를 조절합니다. `background-size` 속성
      값으로 `auto`, `cover`, `contain`, `length`, `percentage` 등을 사용할 수 있습니다.
    -

## 그라데이션 효과

CSS 그라데이션 효과는 배경에 그라데이션 효과를 적용하는 방법입니다. `background-image` 속성을 사용하여 그라데이션 효과를 적용할 수 있습니다. 그라데이션 효과는 선형 그라데이션과 원형 그라데이션
두 가지 종류가 있습니다. 선형 그라데이션은 두 점을 이어 선을 만드는 것처럼 그라데이션을 만들고, 원형 그라데이션은 원 안에서 그라데이션을 만듭니다.

```css
div {
    background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); /* 선형 그라데이션 */
    background-image: radial-gradient(circle, red, orange, yellow, green, blue, indigo, violet); /* 원형 그라데이션 */
}
```

## CSS 고급 선택자

- 연결 선택자

  연결 선택자는 여러 요소를 연결하여 선택할 수 있는 선택자입니다. 연결 선택자는 공백으로 구분하여 사용하며, 왼쪽부터 오른쪽 순서로 요소를 선택합니다. 연결 선택자를 사용하면 특정 요소의 자식, 자손, 형제 요소
  등을 선택할 수 있습니다.

    - 하위 선택자 (descendant selector)

      하위 선택자는 부모 요소의 하위에 있는 모든 자식 요소를 선택합니다. 하위 선택자는 부모 요소와 자식 요소를 공백으로 구분하여 사용합니다.

        ```css
        /* 모든 <li> 요소 선택 */
        ul li {
          color: blue;
        }
        ```

      위의 코드는 `ul` 요소의 모든 하위 `li` 요소를 선택하여 색상을 파란색으로 지정합니다.

    - 자식 선택자 (child selector)

      자식 선택자는 부모 요소의 직계 자식 요소를 선택합니다. 자식 선택자는 부모 요소와 자식 요소를 `>` 기호로 구분하여 사용합니다.

        ```css
        /* <ul>의 직계 자식 <li> 요소 선택 */
        ul > li {
          color: blue;
        }
        ```

      위의 코드는 `ul` 요소의 직계 자식인 `li` 요소만 선택하여 색상을 파란색으로 지정합니다.

    - 인접 형제 선택자 (adjacent selector)

      연결 선택자 중 인접 형제 선택자는 `+` 기호를 사용하여 구분합니다. 인접 형제 선택자는 앞의 선택자 다음에 나오는 요소 중 첫 번째 요소만 선택합니다.

        ```css
        /* <h2> 바로 다음에 나오는 <p> 요소 선택 */
        h2 + p {
          color: blue;
        }
        ```

      위의 코드는 `h2` 요소 다음에 나오는 첫 번째 `p` 요소만 선택하여 색상을 파란색으로 지정합니다.

    - 형제 선택자 (sibling selector)

      형제 선택자는 연결 선택자 중에서도 형제 요소를 선택하는 선택자입니다. 형제 선택자는 `~` 기호를 사용하여 구분합니다. 형제 선택자는 앞의 선택자 다음에 나오는 모든 요소를 선택합니다.

        ```css
        /* <h2> 다음에 나오는 모든 <p> 요소 선택 */
        h2 ~ p {
          color: blue;
        }
        ```

      위의 코드는 `h2` 요소 다음에 나오는 모든 `p` 요소를 선택하여 색상을 파란색으로 지정합니다.


- 속성 선택자

  CSS 속성 선택자는 요소의 속성 값을 선택하여 스타일을 적용하는 선택자입니다. 속성 선택자는 `[]` 기호를 사용하여 속성을 지정합니다.

    - `[attr]`: attr 속성을 가진 요소 선택

        ```css
        /* 모든 href 속성을 가진 <a> 요소 선택 */
        a[href] {
          color: blue;
        }
        ```

    - `[attr=value]`: attr 속성 값이 value인 요소 선택

        ```css
        /* href 속성 값이 "<https://www.google.com>"인 <a> 요소 선택 */
        a[href="<https://www.google.com>"] {
          color: blue;
        }
        ```

    - `[attr^=value]`: attr 속성 값이 value로 시작하는 요소 선택

        ```css
        /* href 속성 값이 "https://"로 시작하는 <a> 요소 선택 */
        a[href^="https://"] {
          color: blue;
        }
        ```

    - `[attr$=value]`: attr 속성 값이 value로 끝나는 요소 선택

        ```css
        /* href 속성 값이 ".pdf"로 끝나는 <a> 요소 선택 */
        a[href$=".pdf"] {
          color: blue;
        }
        ```

    - `[attr*=value]`: attr 속성 값에 value가 포함된 요소 선택

        ```css
        /* href 속성 값에 "example"가 포함된 <a> 요소 선택 */
        a[href*="example"] {
          color: blue;
        }
        ```

    - `[attr~=value]`: attr 속성 값에 value가 포함된 요소를 선택하는 선택자입니다. 이 선택자는 단어를 포함한 값을 가진 요소를 선택할 때 유용합니다.

        ```css
        /* class 속성 값에 "example"가 포함된 요소 선택 */
        [class~=example] {
          color: blue;
        }
        ```

    - `[attr|=value]`: 특정 속성값이 포함된 속성 요소를 선택

      `|=value`는 특정 속성값이 포함된 속성 요소를 선택하는 선택자입니다. 이 선택자는 주로 언어 코드에 사용됩니다. 예를 들어, `lang` 속성 값이 `"en"`인 요소를 선택하고
      싶다면 `[lang|="en"]` 선택자를 사용합니다. 이 경우, `lang` 속성 값이 정확히 `"en"`이거나 `"en-"`으로 시작하는 모든 요소가 선택됩니다.


- 가상 선택자

  다양한 가상 선택자들이 있습니다. 이 중 일부를 소개하겠습니다.

    - `:hover`

      마우스 커서가 올라갔을 때의 상태를 선택합니다.

        ```css
        /* 마우스 커서가 올라갔을 때 색상 변경 */
        a:hover {
          color: red;
        }
        ```

    - `:focus`

      요소가 포커스 되었을 때의 상태를 선택합니다. (예: 사용자가 양식의 입력 필드를 선택할 때)

        ```css
        /* 폼 필드가 포커스되었을 때 색상 변경 */
        input:focus {
          background-color: yellow;
        }
        ```

    - `:active`

      요소가 활성화 되었을 때의 상태를 선택합니다. (예: 사용자가 버튼을 누를 때)

        ```css
        /* 버튼이 눌렸을 때 색상 변경 */
        button:active {
          background-color: green;
        }
        ```

    - `:first-child`

      요소의 첫 번째 자식 요소를 선택합니다.

        ```css
        /* 첫 번째 <li> 요소만 색상 변경 */
        li:first-child {
          color: red;
        }
        ```

    - `:last-child`

      요소의 마지막 자식 요소를 선택합니다.

        ```css
        /* 마지막 <li> 요소만 색상 변경 */
        li:last-child {
          color: green;
        }
        ```

    - `:nth-child(n)`

      요소의 n번째 자식 요소를 선택합니다.

        ```css
        /* 2번째 <li> 요소만 색상 변경 */
        li:nth-child(2) {
          color: blue;
        }
        
        /* 홀수 번째 <li> 요소만 색상 변경 */
        li:nth-child(odd) {
          color: red;
        }
        li:nth-child(2n+1) {
          color: red;
        }
        
        /* 짝수 번째 <li> 요소만 색상 변경 */
        li:nth-child(even) {
          color: green;
        }
        li:nth-child(2n) {
          color: green;
        }
        ```

    - `:nth-of-type(n)`

      동일한 유형의 요소 중에서 n번째 요소를 선택합니다.

        ```css
        /* 2번째 <p> 요소만 색상 변경 */
        p:nth-of-type(2) {
          color: blue;
        }
        ```

    - `:not(selector)`

      지정된 선택자와 일치하지 않는 모든 요소를 선택합니다.

        ```css
        /* <p> 요소 중 class가 "special"이 아닌 요소만 색상 변경 */
        p:not(.special) {
          color: blue;
        }
        ```

    - `::before`와 `::after`

      `::before`와 `::after` 가상 선택자는 요소의 내용 앞이나 뒤에 콘텐츠를 추가할 수 있습니다.

        ```css
        /* <p> 요소 앞에 ">>>" 문자열 추가 */
        p::before {
          content: ">>>";
        }
        
        /* <p> 요소 뒤에 "<<<" 문자열 추가 */
        p::after {
          content: "<<<";
        }
        ```

    - `:checked`

      체크된 입력 요소를 선택합니다. (예: 라디오 버튼, 체크박스)

        ```css
        /* 체크된 <input type="checkbox"> 요소 색상 변경 */
        input[type="checkbox"]:checked {
          background-color: yellow;
        }
        ```

    - `:disabled`

      비활성화된 입력 요소를 선택합니다.
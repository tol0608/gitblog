---
title: CSS의 기초 2
date: "2023-06-22"
description: "웹개발과 CSS"
tags:
  - 웹개발
  - 프로그래밍 기초
  - CSS
---
## COLOR

  color 속성은 요소의 글자색을 지정할 수 있습니다.

  예시:

    ```css
    p {
      color: red;
    }
    ```

  위 코드는 `<p>` 요소의 글자색을 빨간색으로 지정합니다.

  표기법:

  color 속성은 여러 가지의 표기법을 사용할 수 있습니다.

  - 키워드: red, blue, green과 같은 색상 이름을 사용할 수 있습니다.
  - RGB 값: rgb(255, 0, 0)과 같이 빨간색, 녹색, 파란색의 값을 조합하여 사용할 수 있습니다.
  - HEX 값: #FF0000과 같이 RGB 값을 16진수로 표현한 값을 사용할 수 있습니다.

  위 예시 코드에서 사용된 red는 색상 이름으로, #FF0000은 16진수로 표현한 RGB 값입니다.

## TEXT-ALIGN 과 LINE-HEIGHT
  ### TEXT-ALIGN

    text-align 속성은 요소 안에 있는 텍스트의 정렬 방식을 지정합니다.

    예시:

      ```css
      h1 {
        text-align: center;
      }
      ```

    위 코드는 `<h1>` 요소 안에 있는 텍스트를 가운데 정렬합니다.

    text-align 속성에는 left, center, right, justify 등의 값이 있습니다.

 ### LINE-HEIGHT

    line-height 속성은 요소 안에 있는 텍스트의 줄 간격을 지정합니다.

    예시:

      ```css
      p {
        line-height: 1.5;
      }
      ```

    위 코드는 `<p>` 요소 안에 있는 텍스트의 줄 간격을 1.5배로 지정합니다.

    line-height 속성에는 숫자 값, 비율 값, 길이 값 등이 있습니다.

## TEXT-DECORATION

  text-decoration 속성은 요소 안에 있는 텍스트의 장식을 지정합니다.

  예시:

    ```css
    a {
      text-decoration: underline;
    }
    ```

  위 코드는 `<a>` 요소 안에 있는 텍스트에 밑줄을 추가합니다.

  text-decoration 속성에는 underline, overline, line-through, none 등의 값이 있습니다.

## TEXT-DECORATION-COLOR

  text-decoration-color 속성은 요소 안에 있는 텍스트의 장식 색상을 지정합니다.

  예시:

    ```css
    a {
      text-decoration: underline;
      text-decoration-color: red;
    }
    ```

  위 코드는 `<a>` 요소 안에 있는 텍스트에 빨간 밑줄을 추가합니다.

  text-decoration-color 속성에는 색상 이름, RGB 값, HEX 값 등이 사용될 수 있습니다.

  - TEXT-DECORATION-STYLE

    text-decoration-style 속성은 요소 안에 있는 텍스트의 장식 스타일을 지정합니다.

    예시:

      ```css
      a {
        text-decoration: underline;
        text-decoration-style: dotted;
      }
      ```

    위 코드는 `<a>` 요소 안에 있는 텍스트에 점선 밑줄을 추가합니다.

    text-decoration-style 속성에는 solid, double, dotted, dashed 등의 값이 사용될 수 있습니다.


## TEXT-TRANSFORM

  text-transform 속성은 요소 안에 있는 텍스트의 대/소문자 변환 방식을 지정합니다.

  예시:

    ```
    h1 {
      text-transform: uppercase;
    }
    
    p {
      text-transform: capitalize;
    }
    
    ```

  위 코드는 `<h1>` 요소 안에 있는 텍스트를 모두 대문자로 변환하고,  `<p>` 요소 안에 있는 텍스트에서 모든 단어의 첫 글자만 대문자로 변환합니다.

  text-transform 속성에는 uppercase, lowercase, capitalize, none 등의 값이 있습니다.

  - uppercase: 모든 문자를 대문자로 변환합니다.
  - lowercase: 모든 문자를 소문자로 변환합니다.
  - capitalize: 단어의 첫 글자만 대문자로 변환합니다.
  - none: 변환하지 않습니다.

## 목록스타일 (list-style-type)

  목록 스타일 속성은 목록의 마커를 지정합니다.

  - disc: 기본값입니다. 검은색 원 모양의 마커를 사용합니다.
  - circle: 회색 원 모양의 마커를 사용합니다.
  - square: 검은색 사각형 모양의 마커를 사용합니다.
  - decimal: 숫자를 사용한 목록입니다. 1부터 시작하며, 기본값은 1입니다.
  - decimal-leading-zero: 숫자를 사용한 목록입니다. 01부터 시작하며, 한 자리 숫자 앞에 0이 붙습니다.
  - lower-roman: 로마숫자를 사용한 목록입니다. 소문자 i, ii, iii, iv 등의 형태로 사용합니다.
  - upper-roman: 로마숫자를 사용한 목록입니다. 대문자 I, II, III, IV 등의 형태로 사용합니다.
  - lower-alpha: 알파벳을 사용한 목록입니다. 소문자 a, b, c, d 등의 형태로 사용합니다.
  - upper-alpha: 알파벳을 사용한 목록입니다. 대문자 A, B, C, D 등의 형태로 사용합니다.

  예시:

    ```css
    ol {
      list-style-type: upper-alpha;
    }
    ```

  위 코드는 `<ol>` 요소에서 대문자 알파벳을 사용한 목록 스타일을 지정합니다.

  `list-style-image` 은 목록의 불릿을 이미지파일로 바꿀 수 있습니다.

  `list-style-position` 은 불릿이나 번호를 들여쓰거나 내어쓸 수 있습니다.

## 표스타일

  표 스타일 속성은 HTML `<table>` 태그에서 사용되며, 표의 스타일을 지정합니다.

  ### border-collapse

  border-collapse 속성은 표의 셀 경계선을 합칠지 분리할지를 지정합니다.

  - separate: 기본값입니다. 셀 경계선을 분리합니다.
  - collapse: 셀 경계선을 합칩니다.

  ### border-spacing

  border-spacing 속성은 표의 셀 간격을 지정합니다.

  - length: 셀 간격을 지정합니다. 예시: `border-spacing: 10px;`
  - length length: 가로 세로 순서로 셀 간격을 지정합니다. 예시: `border-spacing: 10px 5px;`

  ### caption-side

  caption-side 속성은 표의 제목 위치를 지정합니다.

  - top: 제목을 표 위쪽에 위치시킵니다.
  - bottom: 제목을 표 아래쪽에 위치시킵니다.

  ### empty-cells

  empty-cells 속성은 내용이 없는 셀의 셀 경계선을 숨기거나 표시할지를 지정합니다.

  - show: 기본값입니다. 모든 셀 경계선을 표시합니다.
  - hide: 내용이 없는 셀의 셀 경계선을 숨깁니다.

  ### table-layout

  table-layout 속성은 표의 너비를 지정하는 방법을 지정합니다.

  - auto: 표의 셀 너비를 셀 내용 크기에 따라 자동으로 조정합니다.
  - fixed: 표의 너비를 지정한 값에 따라 고정합니다.

  예시:

    ```css
    table {
      border-collapse: collapse;
      border-spacing: 0;
      caption-side: bottom;
      empty-cells: hide;
      table-layout: fixed;
    }
    ```

  위 코드는 표의 경계선을 하나로 합치고, 셀 간격을 0으로 지정합니다. 제목은 표 아래쪽에 위치하며, 내용이 없는 셀의 경계선은 숨깁니다. 표의 너비는 고정됩니다.

    ```html
    <table style="border-collapse: collapse;">
    <caption>표 예시</caption>
    <thead>
    <tr>
    <th>제목 1</th>
    <th>제목 2</th>
    <th>제목 3</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>내용 1</td>
    <td>내용 2</td>
    <td>내용 3</td>
    </tr>
    <tr>
    <td>내용 4</td>
    <td>내용 5</td>
    <td>내용 6</td>
    </tr>
    </tbody>
    </table>
    ```
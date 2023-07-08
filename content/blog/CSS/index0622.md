---
title: CSS의 기초 1
date: "2023-06-23"
description: "웹개발과 CSS"
tags:
  - 웹개발
  - 프로그래밍 기초
  - CSS
---

### CSS 시작

- CSS

  CSS는 Cascading Style Sheets의 약자로, HTML 문서에 스타일을 적용하는 언어입니다. HTML과 같이 대소문자 구분을 하지 않습니다.

  CSS는 인라인스타일, 내부스타일, 외부스타일로 나뉘며, 이 중에서 외부스타일을 사용하는 것이 좋습니다. 외부스타일은 여러 HTML 파일에서 동일한 스타일을 적용할 수 있고, 유지보수가 용이합니다. 따라서 일반적으로는 외부스타일을 사용하는 것이 좋습니다.

  - 선택자

    CSS 선택자는 HTML 요소에 스타일을 적용하는 패턴입니다. 선택자를 사용하여 HTML 요소를 선택하고, 중괄호 안에 스타일을 지정합니다.

    예를 들어, `p` 선택자를 사용하면 문서의 모든 `p` 요소에 스타일을 적용할 수 있습니다.

      ```
      p {
        color: red;
      }
      
      ```

    또한, `id`나 `class` 속성을 사용하여 특정 요소를 선택할 수도 있습니다. `id` 선택자는 `id` 속성의 값으로 요소를 선택하고, `class` 선택자는 `class` 속성의 값으로 요소를 선택합니다.

      ```
      #header {
        font-size: 20px;
      }
      
      .menu {
        background-color: green;
      }
      
      ```

    선택자는 여러 개의 요소를 선택하기 위해 조합될 수도 있습니다. 예를 들어, `ul li` 선택자는 `ul` 요소 내부에 있는 모든 `li` 요소를 선택합니다.

      ```
      ul li {
        list-style-type: square;
      }
      
      ```


    <aside>
    🌐 Cascading(캐스케이딩)은 CSS의 스타일 우선순위가 결정될 때 사용되는 개념입니다. 스타일 우선순위는 스타일을 지정하는 방법에 따라 다르며, 스타일 지정 방법에 따라 적용 우선순위가 결정됩니다. 적용 우선순위는 다음과 같습니다.
    
    1. !important
    2. 인라인 스타일
    3. ID 속성으로 지정된 스타일
    4. 클래스 속성, 속성 선택자, 가상 클래스 선택자로 지정된 스타일
    5. 요소 선택자, 가상 요소 선택자로 지정된 스타일
    6. 전체 선택자로 지정된 스타일
    
    이렇게 우선순위가 결정됩니다. 예를 들어, 인라인 스타일로 지정된 스타일은 다른 스타일보다 더 우선순위가 높습니다.
    
    </aside>
    
    - Font
        
        웹 폰트(Web Font)는 웹 페이지에서 사용하는 폰트를 말합니다. 웹 폰트를 사용하면 사용자가 해당 폰트를 미리 설치하지 않아도 웹 페이지에서 해당 폰트를 사용할 수 있습니다.
        
        웹 폰트는 다음과 같은 방식으로 사용할 수 있습니다.
        
        ### 구글 웹 폰트
        
        [Google Fonts](https://fonts.google.com/)에서 다양한 무료 웹 폰트를 다운로드 받을 수 있습니다. 다운로드 받은 폰트는 HTML 문서에서 다음과 같이 `link` 태그를 이용하여 불러올 수 있습니다.
        
        ```html
        <link href="<https://fonts.googleapis.com/css?family=Font+Name>" rel="stylesheet">
        ```
        
        `Font+Name` 부분에는 원하는 폰트 이름을 적으면 됩니다. 예를 들어, `Open+Sans` 폰트를 사용하려면 다음과 같이 작성합니다.
        
        ```html
        <link href="<https://fonts.googleapis.com/css?family=Open+Sans>" rel="stylesheet">
        ```
        
        다운로드 받은 폰트는 CSS에서 다음과 같이 사용할 수 있습니다.
        
        ```css
        body {
          font-family: 'Open Sans', sans-serif;
        }
        ```
        
        ### 로컬 웹 폰트
        
        로컬에 저장된 웹 폰트를 사용할 수도 있습니다. 이 경우, 다음과 같이 `@font-face` 규칙을 사용하여 폰트를 불러올 수 있습니다.
        
        ```css
        @font-face {
          font-family: 'Font Name';
          src: url('font_file.woff2') format('woff2'),
               url('font_file.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
           font-family: 'Ostrich';  /* 폰트 이름은 이렇게 사용할거에요 */
           src: local('Ostrich Sans'), /* 이미 가지고 있다면 이 폰트를 사용하세요 */
                url('fonts/ostrich-sans-bold.woff') format('woff'), 
                url('fonts/ostrich-sans-bold.ttf') format('truetype'), 
                url('fonts/ostrich-sans-bold.svg') format('svg');
        				/* font format에 따른 불러오기 */
              }
        
        body {
          font-family: 'Font Name', sans-serif;
        }
        ```
        
        `src` 속성에는 웹 폰트 파일의 경로를 지정하면 됩니다. 다음과 같은 파일 형식을 지원합니다.
        
        - WOFF
        - WOFF2
        - TTF
        - EOT
        - SVG
        
        ### 예시
        
        다음은 Google Fonts에서 다운로드 받은 `Open Sans` 웹 폰트를 사용하는 예시입니다.
        
        ```html
        <!DOCTYPE html>
        <html>
          <head>
            <link href="<https://fonts.googleapis.com/css?family=Open+Sans>" rel="stylesheet">
            <style>
              body {
                font-family: 'Open Sans', sans-serif;
                font-size: 16px;
              }
              h1 {
                font-size: 2em;
                font-weight: bold;
              }
              p {
                line-height: 1.5;
              }
            </style>
          </head>
          <body>
            <h1>웹 폰트 예시</h1>
            <p>이 문서는 오픈 샌스(Open Sans) 웹 폰트를 사용합니다.</p>
          </body>
        </html>
        ```
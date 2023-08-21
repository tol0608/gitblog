---
title: HTML의 기초 1
date: "2023-06-20"
description: "웹개발과 HTML"
tags:
  - 웹개발
  - 프로그래밍 기초
  - HTML
---

## HTML 텍스트 태그
  - `<p>`: 단락을 표시하는 태그입니다.
  - `<br>`: 줄바꾸기 태그입니다.
  - `<h1>` ~ `<h6>`: 제목을 표시하는 태그입니다. 숫자가 작을수록 큰 제목입니다.
  - `<em>`, `<i>`: 강조하는 텍스트를 이탤릭체로 표시합니다.
  - `<strong>`, `<b>` : 강조하는 텍스트를 굵은 글씨로 표시합니다.
  - `<a>`: 링크를 만드는 태그입니다.
  - `<u>` 태그는 텍스트에 밑줄을 표시하는 태그입니다.
  - `s` 태그는 텍스트에 취소선을 표시하는 태그입니다.

## HTML 목록 태그
  - `<ul>`: 순서가 없는 목록을 만듭니다.
  - `<ol>`: 순서가 있는 목록을 만듭니다.
  - `<li>`: 목록의 아이템을 나타냅니다.
  - `<dl>`: 용어를 정의하는 목록을 만듭니다.
  - `<dt>`: 용어를 정의합니다.
  - `<dd>`: 용어에 대한 정의를 제공합니다.

## HTML 표 태그

  ![img_1.png](img_1.png)

  - `<table>`: 표 전체를 감싸는 태그입니다.
  - `<caption>`: 표 제목 태그입니다.
  - `<tr>`: 표의 행을 나타내는 태그입니다.
  - `<th>`: 표의 열 제목을 나타내는 태그입니다.
  - `<td>`: 표의 셀을 나타내는 태그입니다.

    <aside>
    👉 `colspan` 속성은 한 셀이 여러 열에 걸쳐 있을 때 사용됩니다. 예를 들어, `<td colspan="2">`는 하나의 셀이 두 개의 열을 차지한다는 것을 의미합니다.

  `rowspan` 속성은 한 셀이 여러 행에 걸쳐 있을 때 사용됩니다. 예를 들어, `<td rowspan="2">`는 하나의 셀이 두 개의 행을 차지한다는 것을 의미합니다.

    </aside>

## HTML 이미지 태그

  `<img>` 태그를 사용하여 이미지를 삽입할 수 있습니다.

    ```html
    <img src="이미지_파일_경로" alt="이미지_대체_텍스트">
    ```

  `src` 속성은 이미지 파일의 경로를 지정합니다. `alt` 속성은 이미지가 로드되지 않았을 때 대체 텍스트를 제공합니다.

  JPEG, PNG(투명 배경 가능), GIF(아이콘 등) 이미지 형식을 사용할 수 있습니다.

## URL

  http://127.0.0.1:8080/chap04/poster-table.html

  > protocol : http
  >
  >
  > hostname : 127.0.0.1
  >
  > post : 8080
  >
  > pathname : /chap04/poster-table.html
  >

  HTML에서는 두 가지 경로 지정 방식을 사용합니다.

  1. **절대 경로**: 문서의 루트에서부터 파일의 경로를 지정합니다. 예를 들어, `/images/picture.jpg`는 루트 디렉토리에서 `images` 디렉토리에 있는 `picture.jpg` 파일을 나타냅니다.
  2. **상대 경로**: 현재 문서에서 파일까지의 상대적인 경로를 지정합니다. 예를 들어, `./images/picture.jpg`는 현재 문서에서 `images` 디렉토리에 있는 `picture.jpg` 파일을 나타냅니다. `./`을 생략할 수 있지만 권장하지는 않습니다. 웹에서는 주로 상대 경로 방식을 사용합니다.

  HTML에서 경로를 지정할 때 `../`과 `./`의 차이는 다음과 같습니다.

  `../`: 현재 문서의 상위 디렉토리를 나타냅니다. 예를 들어, `../images/picture.jpg`는 현재 문서의 상위 디렉토리에서 `images` 디렉토리에 있는 `picture.jpg` 파일을 나타냅니다.

  `./`: 현재 문서와 같은 디렉토리를 나타냅니다. 예를 들어, `./images/picture.jpg`는 현재 문서와 같은 디렉토리에서 `images` 디렉토리에 있는 `picture.jpg` 파일을 나타냅니다. `./`을 생략할 수 있지만 권장하지는 않습니다.

## width와 heights

  `<img>` 태그의 `width`와 `height` 속성을 사용하여 이미지의 크기를 조정할 수 있습니다.

    ```html
    <img src="이미지_파일_경로" alt="이미지_대체_텍스트" width="100" height="100">
    ```

  `width`와 `height`는 픽셀 단위로 지정됩니다. 이미지의 가로와 세로 크기를 각각 100픽셀로 조정하려면 위와 같이 작성하면 됩니다.

  `width`와 `height` 속성을 사용하지 않으면, 이미지의 원래 크기로 표시됩니다.

    <aside>
    👉 `<img>` 태그의 크기를 조정할 때는, 이미지 파일 자체의 크기를 줄이는 것이 아니라, 이미지가 표시되는 크기를 조절하는 것입니다. 따라서, 이미지 파일 자체의 크기가 매우 크다면, 이미지의 표시 속도가 느려지거나, 페이지 로딩 시간이 길어질 수 있습니다.

    </aside>

## object 태그

  `<object>` 태그는 외부 웹 페이지, 이미지, 비디오 등의 멀티미디어 콘텐츠를 웹 페이지에 삽입하는 태그입니다. `<embed>` 태그와 비슷한 역할을 수행하지만 더 많은 제어가 가능합니다.

  `<object>` 태그는 다음과 같은 속성을 포함합니다.

  - `data`: 삽입할 콘텐츠의 URL을 지정합니다.
  - `type`: 삽입할 콘텐츠의 MIME 유형을 지정합니다.
  - `width`: 삽입된 콘텐츠의 너비를 지정합니다.
  - `height`: 삽입된 콘텐츠의 높이를 지정합니다.
  - `name`: `<a>` 태그의 `target`과 비슷한 역할을 수행합니다. `name` 속성이 지정된 `<object>` 태그는 하이퍼링크를 클릭했을 때 새로운 윈도우가 열리지 않고 지정된 이름의 프레임에 콘텐츠가 표시됩니다.
  - `usemap`: `image` 태그와 함께 사용되며, 이미지를 클릭했을 때 링크를 연결하는 맵 파일의 URL을 지정합니다.
  - `classid`, `codebase`, `codetype`, `archive`: Internet Explorer에서 ActiveX 컨트롤을 삽입할 때 사용합니다.

  `<object>` 태그는 다음과 같이 사용합니다.

    ```html
    <object data="example.swf" type="application/x-shockwave-flash" width="400" height="300"></object>
    ```

## 오디오와 비디오 태그
  - 오디오 태그

    HTML5에서 추가된 오디오 태그는 다음과 같습니다.

      ```
      <audio src="audio.mp3" controls></audio>
      
      ```

    `<audio>` 태그는 `src` 속성으로 오디오 파일의 URL을 지정합니다. `controls` 속성은 오디오 재생 컨트롤러를 표시합니다.

    `<audio>` 태그는 다음과 같은 속성을 포함합니다.

    - `src`: 오디오 파일의 경로를 지정합니다.
    - `controls`: 재생, 일시 중지, 음량 조절 등의 컨트롤러를 표시합니다.
    - `autoplay`: 페이지가 로드될 때 오디오가 자동으로 재생됩니다.
    - `loop`: 오디오가 반복 재생됩니다.
    - `preload`: 페이지 로드 시 오디오 파일을 미리 로드할지 여부를 지정합니다.

    `<audio>` 태그는 `<source>` 태그를 사용하여 여러 개의 오디오 파일을 지정할 수도 있습니다.

      ```html
      <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        Your browser does not support the audio tag.
      </audio>
      ```

  - 비디오 태그

    HTML5에서 추가된 비디오 태그는 다음과 같습니다.

      ```
      <video src="video.mp4" controls></video>
      
      ```

    `<video>` 태그는 `src` 속성으로 비디오 파일의 URL을 지정합니다. `controls` 속성은 비디오 재생 컨트롤러를 표시합니다.

    `<video>` 태그는 다음과 같은 속성을 포함합니다.

    - `src`: 비디오 파일의 경로를 지정합니다.
    - `controls`: 재생, 일시 중지, 음량 조절 등의 컨트롤러를 표시합니다.
    - `autoplay`: 페이지가 로드될 때 비디오가 자동으로 재생됩니다.
    - `loop`: 비디오가 반복 재생됩니다.
    - `preload`: 페이지 로드 시 비디오 파일을 미리 로드할지 여부를 지정합니다.
    - `width`: 비디오의 너비를 지정합니다.
    - `height`: 비디오의 높이를 지정합니다.

    `<video>` 태그는 `<source>` 태그를 사용하여 여러 개의 비디오 파일을 지정할 수도 있습니다.

      ```html
      <video controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video>
      ```

## a태그

  `<a>` 태그는 하이퍼링크를 나타내며, 다음과 같은 속성을 포함합니다.

  - `href`: 하이퍼링크의 URL을 지정합니다.
  - `target`: 링크를 열 위치를 지정합니다. `_blank`는 새로운 창에서 링크를 열고, `_self`는 현재 창에서 링크를 엽니다.
  - `download`: 링크를 클릭했을 때 파일을 다운로드합니다.
  - `rel`: 링크와 관련된 것을 지정합니다. `nofollow`는 검색 엔진이 링크를 따라가지 않도록 합니다.

    ```html
    <a href="<https://example.com>" target="_blank">Example</a>
    ```

  위 코드는 `Example`이라는 텍스트를 클릭하면 `https://example.com` 주소로 이동합니다. 링크를 새로운 창에서 열려면 `target="_blank"`를 사용합니다.

    <aside>
    👉 `<a>` 태그의 `href` 속성은 URL 뿐만 아니라 다음과 같은 값도 지정할 수 있습니다.

  - `#`: 현재 페이지의 맨 위로 이동합니다.
  - `javascript:`: 자바스크립트 코드를 실행합니다. 이 방식은 보안 문제 때문에 권장하지 않습니다.
    </aside>

  `<a>` 태그는 텍스트 링크 뿐만 아니라, 이미지를 클릭했을 때 링크를 연결할 수도 있습니다.

    ```html
    <a href="<https://example.com>"><img src="example.png" alt="Example"></a>
    ```

  위 코드는 `example.png` 이미지를 클릭하면 `https://example.com` 주소로 이동합니다.

    <aside>
    👉 `<a>` 태그는 웹 접근성을 고려해야 하는 중요한 태그입니다. 링크 텍스트는 명확하게 작성해야 하며, 링크가 새 창에서 열리는 경우에는 사용자에게 알려주어야 합니다.

    </aside>

  그 외, a 링크로는 아이프레임 삽입, 이미지맵, 자바스크립트와 연결 할 수 있습니다.


## 검색과 파라미터

  네이버에서 ‘java’라는 키워드를 사용자가 검색하면 아래와 같은 주소가 나옵니다.

    <aside>
    🌐 https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=java

    </aside>

  ?

  where=nexearch   &

  sm=top_hty           &

  fbm=0                    &

  ie=utf8                   &

  query=java
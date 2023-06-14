---
title: Gatsby를 이용한 블로그 운영
date: "2023-06-07T23:09:32.169Z"
description: Git Blog 중 하나인 Gatsby 글을 발행하면 어떻게 되는지 실험해보자.
tags:
  - 개발
  - 깃허브
---

그동안 Gatsby 환경을 세팅하고, 대략적으로 구조를 파악했습니다. <br>
파악한 정보로 기술블로그를 시작하기 이전에 Gatsby 초기세팅에 대하여 알아보겠습니다.

# Gatsby를 이용하여 Git Blog 꾸미기

Gatsby는 React 기반의 정적 사이트 생성기로, 빠른 페이지 로딩 속도와 SEO 최적화가 가능합니다. 이번 포스팅에서는 Gatsby를 이용하여 개발 블로그를 세팅하는 방법에 대해 알아보겠습니다.

## 1. Gatsby 설치 및 프로젝트 생성

먼저, Gatsby를 설치해주세요. npm을 이용하여 설치할 수 있습니다.

```jsx
npm install -g gatsby-cli
```

설치가 완료되었다면, 아래의 명령어를 실행하여 Gatsby 프로젝트를 생성해주세요.

```jsx
gatsby new {프로젝트 이름} <https://github.com/gatsbyjs/gatsby-starter-blog>
```

## 2. 블로그 커스터마이징

프로젝트가 생성되었다면, 이제 블로그를 커스터마이징 해볼 차례입니다.

### 블로그 설정

`gatsby-config.js` 파일에서 블로그의 제목, 설명, 저자 정보 등을 설정할 수 있습니다.

```jsx
module.exports = {
  siteMetadata: {
    title: "{블로그 제목}",
    description: "{블로그 설명}",
    author: "{블로그 저자 정보}"
  },
  plugins: []
};
```
### 블로그 UI 커스터마이징

Gatsby에서 제공하는 스타터 템플릿의 UI는 `src/components` 디렉토리에서 수정할 수 있습니다.

### 블로그 포스트 작성

`src/pages` 디렉토리에서 블로그 포스트를 작성할 수 있습니다. Markdown 형식으로 작성하며, 파일명은 `yyyy-mm-dd-{포스트 제목}.md` 형식으로 작성해야 합니다.

## 3. 빌드 및 배포

블로그 커스터마이징이 완료되었다면, 아래의 명령어를 실행하여 빌드를 진행해주세요.

```jsx
gatsby build
```

빌드가 완료되면, `public` 폴더에 정적 파일들이 생성됩니다. 이제 이 파일들을 웹 호스팅 서비스에 배포하면 블로그를 공개할 수 있습니다.

앞으로 Gatsby를 이용하여 기술블로그를 꾸며보겠습니다.
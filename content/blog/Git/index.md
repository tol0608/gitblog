---
title: Git
date: "2023-06-27T22:12:03.284Z"
description: "Git과 리눅스 명령어"
tags:
  - 개발
  - JAVA
  - GIT
  - 리눅스
---

## 리눅스 명령어

| 명령어 | 설명 | 옵션 | 예시 |
| --- | --- | --- | --- |
| man | 명령어에 대한 매뉴얼 조회 | - | man touch |
| ls | 디렉토리 내 파일 조회 | -al (all, long format) . 으로 시작하는 숨김 파일까지 조회 | ls -al |
| clear | 현재 콘솔에 출력된 내용 지우기 | - | clear |
| cd | change directory 경로 변경 . . : 현재 경로, .. : 상위 경로, ~ : home, - : 직전 경로 | cd Documents |  |
| touch | 빈 파일 생성 | - | touch test.txt |
| echo | 인자를 콘솔(standard output)에 출력 | - | echo "Hello, world!" |
| cat | concatenate and print 인자에 있는 파일을 전부 읽어서 콘솔에 출력 | - | cat test.txt |
| cp | 파일 복사 -R (recursive) 디렉토리도 전부 복사 | -R | cp -R source destination |
| mv | 파일 이동, 이름 변경 | - | mv source destination |
| rm | 파일 삭제 (디렉토리는 제거 X) -rf (recursive, force) 인자에 명시된 경로에 있는 전부를 강제로 삭제 | -rf | rm -rf file.txt |
| mkdir | 디렉토리 생성 | - | mkdir directory |
| rmdir | 디렉토리 삭제 | - | rmdir directory |
| vi | vim editor로 현재 파일을 편집 | - | vi file.txt |
| history | 명령어 사용 이력 조회 | - | history |
| grep | 키워드 검색 후 콘솔에 출력 | - | grep keyword file.txt |
| find | 파일 검색 | - | find . -name "*.txt" |
| export | 환경변수 | - | export PATH="/usr/local/bin:$PATH" |
| alias | 명령어에 별명 붙이기 | - | alias ll='ls -alF' |
| ps | 현재 실행 중인 프로세스 목록 확인 | -ef | ps -ef |
| exit | 터미널 종료 | - | exit |


## 터미널 Git 명령어

| 1. 도움말과 설정 | 2. 저장소 생성, 복제 | 3. 스냅샷 저장하기(커밋) | 4. 브랜치 | 5. 원격 | 6. 커밋 수정하기 | 7. 기타 |
| --- | --- | --- | --- | --- | --- | --- |
| git help | git init | git add | git branch | git remote | git reset | git bisect |
| git config | git clone | git status | git checkout | git fetch | git rebase -i | git blame |
|  |  | git diff | git merge | git pull | git cherry-pick | git grep |
|  |  | git commit | git rebase | git push | git revert | git reflog |
|  |  | git log | git stash |  |  |  |
|  |  | git rm | git tag |  |  |  |
|  |  | git mv |  |  |  |  |
|  |  | git restore |  |  |  |  |
|  |  | git reset |  |  |  |  |
|  |  | git clean |  |  |  |  |
|  |  | git show |  |  |  |  |
|  |  | git describe |  |  |  |  |
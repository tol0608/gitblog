---
title: 시험점수 평가
date: "2023-05-23T22:12:03.284Z"
description: "Java로 구현한 시험점수 평가"
tags:
  - 개발
  - JAVA
---

```java
/*
    시험 점수는 0점 부터 100점 사이의 값이어야 합니다.
    올바른 값이 입력되는 경우에만 학생의 점수를 평가하는 코드를 작성하세요.
*/

import java.util.Scanner;

public class Exam1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("학생의 시험점수를 입력하세요 : ");
        int score = sc.nextInt();

        sc.close();

        if (score >= 0 && score <= 100) {
            if (score >= 90) {
                System.out.println("참잘한듯.");
            } else if (score >= 80) {
                System.out.println("잘한듯");
            } else if (score >= 70) {
                System.out.println("적당한듯");
            } else if (score >= 60) {
                System.out.println("에헤이");
            } else {
                System.out.println("재수강 하삼요");
            }
        }   else {
            System.out.println("학생 점수를 확인하삼요");
        }
    }
}
```
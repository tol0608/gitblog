---
title: 올림, 반올림, 내림 계산기
date: "2023-05-23T22:12:03.284Z"
description: "Java로 구현한 올림, 반올림, 내림 계산기"
tags:
  - 개발
  - JAVA
---

```java
/*
   사용자에게 하나의 실수를 입력 받아 다음의 결과를 출력하는 코드를 작성하세요.
   실행결과 1.
   하나의 실수를 입력하세요 : 3.64

   버림: 3
   반올림: 4
   올림: 4

   실행결과 2.
   하나의 실수를 입력하세요 : 6.2364

   버림: 6
   반올림: 6
   올림: 7

   실행결과 3.
   하나의 실수를 입력하세요 : 4.0

   버림: 4
   반올림: 4
   올림: 4
*/

import java.util.Scanner;

public class Exam {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("\n하나의 실수를 입력하세요: ");
        double number = sc.nextDouble();
        int down = (int) Math.floor(number);
        int hup = (int) Math.round(number);
        int up = (int) Math.ceil(number);
        sc.close();

        System.out.println("\n버림: " + down + "\n반올림: " + hup + "\n올림: " + up);
    }
}
```
---
title: 가위바위보
date: "2023-05-31T23:09:32.169Z"
description: "Java로 구현한 가위바위보 프로그램"
tags:
  - 개발
  - JAVA
---

```java
/*
[가위바위보 게임]
1.가위
2.바위
3.보
>>> 3

사용자 보, 컴퓨터 가위
가위바위보 결과 ==> 졌습니다.

[코드작성 조건]
1. switch 문을 이용하여 문제를 해결하세요.
2. if 문을 이용하여 문제를 해결하세요.
*/

import java.util.Scanner;

public class Exam5 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int user, com;
		String userStr = "", comStr = "", result = "";
		String intro = "\n\t [ 가위바위보 게임 ] \n" +
				"\n" +
				"\t 1.가위 \n" +
				"\t 2.바위 \n" +
				"\t 3.보 \n" +
				"\t >>> ";

		com = (int) (Math.random() * 3);

		System.out.print(intro);
		user = sc.nextInt() - 1;
		sc.close();

		switch (user) {
			case 0: userStr = "가위"; break;
			case 1: userStr = "바위"; break;
			case 2: userStr = "보"; break;
		}

		switch (com) {
			case 0: comStr = "가위"; break;
			case 1: comStr = "바위"; break;
			case 2: comStr = "보"; break;
		}

		switch (user - com) {
			case 0: result = "비김"; break;
			case 1: case -2: result = "이김 v"; break;
			case -1: case 2: result = "짐"; break;
		}

		System.out.printf("\n\t 사용자 : %s, 컴퓨터 : %s \n", userStr, comStr);
		System.out.printf("\t 가위바위보 결과: %s \n", result);
	}
}
```

```java
/*
사용자가 원할때까지 하는 가위바위보 코드를 만드시오.
*/

import java.util.Scanner;

public class Exam {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int user = 0, com = 0;
		String userStr = "", comStr = "", result = "", input = "";
		String intro = "\n\t [ 가위바위보 게임 ] \n" +
				"\n" +
				"\t 1.가위 \n" +
				"\t 2.바위 \n" +
				"\t 3.보 \n" +
				"\t >>> ";

		do {
			com = (int) (Math.random() * 3);

			System.out.print(intro);
			user = sc.nextInt() - 1;
			sc.nextLine(); // 버퍼 비우기

			switch (user) {
				case 0:
					userStr = "가위";
					break;
				case 1:
					userStr = "바위";
					break;
				case 2:
					userStr = "보";
					break;
				default:
					System.out.println("가위바위보에서 내셈");
					continue;
			}

			switch (com) {
				case 0:
					comStr = "가위";
					break;
				case 1:
					comStr = "바위";
					break;
				case 2:
					comStr = "보";
					break;
			}

			switch (user - com) {
				case 0:
					result = "비김";
					break;
				case 1:
				case -2:
					result = "이김";
					break;
				case -1:
				case 2:
					result = "짐";
					break;
			}
			System.out.printf("\n\t 사용자 : %s, 컴퓨터 : %s \n", userStr, comStr);
			System.out.printf("\t 가위바위보 결과: %s \n", result);

			System.out.print("ㄹ? (Y/N) : ");
			input = sc.nextLine();
			System.out.println();

		} while (input.equals("Y") || input.equals("y"));

		sc.close();
		System.out.printf("\n\t 감사요. 담에보삼. \n");
	}
}
```

```java
/*
사용자가 이길때 까지 하는 가위바위보 코드를 만드시오.
*/

import java.util.Scanner;

public class Exam {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int user = 0, com=0;
		boolean isWin = false;
		String userStr = "", comStr = "", result = "";
		String intro = "\n\t [ 가위바위보 게임 ] \n" +
				"\n" +
				"\t 1.가위 \n" +
				"\t 2.바위 \n" +
				"\t 3.보 \n" +
				"\t >>> ";

		do {
			com = (int) (Math.random() * 3);

			System.out.print(intro);
			user = sc.nextInt() - 1;

			switch (user) {
				case 0:
					userStr = "가위";
					break;
				case 1:
					userStr = "바위";
					break;
				case 2:
					userStr = "보";
					break;
				default:
					System.out.println("가위바위보에서 내셈");
					continue;
			}

			switch (com) {
				case 0:
					comStr = "가위";
					break;
				case 1:
					comStr = "바위";
					break;
				case 2:
					comStr = "보";
					break;
			}

			switch (user - com) {
				case 0:
					result = "비김";
					break;
				case 1:
				case -2:
					result = "이김 v";
					isWin = true;
					break;
				case -1:
				case 2:
					result = "짐";
					break;
			}
			System.out.printf("\n\t 사용자 : %s, 컴퓨터 : %s \n", userStr, comStr);
			System.out.printf("\t 가위바위보 결과: %s \n", result);

		} while (!isWin);

		sc.close();
		System.out.printf("\n\t 감사요. 담에보삼. \n");

	}
}
```

<aside>
😮 JAVA로 컴퓨터 프로그래밍 기초를 배우기 시작한지 일주일 정도가 흘렀습니다.
내가 생각했던것보다 더 어려웠습니다. 코드 작성에 대한 막연한 감이 있었지만, 실제로 코드를 작성하려고 하니 더, 막막함을 느꼈습니다. 
기본기가 매우 부족하다는 것을 깨달았습니다.

그래서, 매일매일 조금씩이라도 배운 것을 정리하고, 코드에 익숙해지기 위해 노력하려고 합니다. 단순히 지식을 쌓는 것이 아니라, 주어진 문제를 해결하는 과정에서 내가 어떻게 코드를 작성할 수 있는지 배우고자 합니다.

너무 많은 것을 한 달음에 이루려고 하는 것보다, 천천히 하나씩 정리하며 자신감을 높이는 것이 중요하다는 것도 깨달았습니다.
앞으로 이 과정을 통해 코드 작성에 익숙해지고, 더 나아가 프로그래밍을 재미있게 할 수 있으면 좋겠습니다.

</aside>
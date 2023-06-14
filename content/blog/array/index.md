---
title: 배열(Array)
date: "2023-06-01T22:12:03.284Z"
description: "Java와 배열(Array)"
tags:
    - 개발
    - JAVA
---

```java
import java.util.Scanner;

// 아래의 마지막 일자 계산 프로그램을 배열을 이용하여 보다 효율적인 코드로 변경하세요.

public class Exam {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.print("년도랑 월을 입력하삼요: ");
		int year = sc.nextInt();
		int month = sc.nextInt();
		int[] daysInMonth = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		int date;

		if (month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
			date = 29;
		} else {
			date = daysInMonth[month - 1];
		}

		System.out.println(year + "년 " + month + "월 의 마지막 일자는 " + date + "일임");
	}
}
```

```java
import java.util.Scanner;

// 아래의 가위바위보 게임의 코드를 배열을 이용하여 보다 효율적인 코드로 변경하세요.

public class Exam1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int user, com;
		String[] kbb = {"가위", "바위", "보"};
		String result = "";
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

		switch (user - com) {
			case 0:
				result = "비김";
				break;
			case 1:
			case -2:
				result = "이김 v";
				break;
			case -1:
			case 2:
				result = "짐";
				break;
		}

		System.out.printf("\n\t 사용자 : %s, 컴퓨터 : %s \n", kbb[user], kbb[com]);
		System.out.printf("\t 가위바위보 결과: %s \n", result);
	}
}
```

<aside>
😮 배열 이론을 들을 때는 생각보다 간단하다고 생각했지만, 다중 배열이나 배열을 이용해 기존에 만들어놓은 코드를 수정하려고 하니 생각보다 어려웠습니다.
생각의 틀을 부수는 연습이 필요한 것 같습니다.
그래도 기존의 코드를 수정하며 조금씩 코드가 짧아지는 것을 보며, 내가 생각하는 것보다 알고리즘이 단순하다는 것을 조금씩 느끼고 있습니다.

</aside>

---
title: 연, 월, 일 계산 - 객체지향
date: "2023-06-15T23:09:32.169Z"
description: "Java로 구현한 객체지향 연, 월, 일 계산"
tags:
  - 개발
  - JAVA
  - 객체지향
---

```java
// 사용자에게 년, 월, 일을 입력 받아 입력한 일자의 요일을 반환하는 프로그램을 작성
// 단, 반드시 객체지향적인 코드로 작성해야함

// < 실행 예 >
// 년, 월, 일을 입력하세요 : 2023 6 12
// 입력하신 2023년 6월 12일은 월요일 입니다.

import java.util.Scanner;

public class Exam {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		MyCalendar calendar;
		int year, month, day;

		System.out.print("년, 월, 일 : ");
		year = sc.nextInt();
		month = sc.nextInt();
		day = sc.nextInt();
		sc.close();

		calendar = new MyCalendar(year, month, day);
		System.out.printf("입력한 %d년 %d월 %일은 %s요일인듯 \n", year, month, day, calendar.getDayOfWeek());
	}
}
```

```java
public class MyCalendar {
	private int year;
	private int month;
	private int day;

	public MyCalendar(int year, int month, int day) {
		this.year = year;
		this.month = month;
		this.day = day;
	}

	// 윤년 판단 메서드
	private boolean isleapYear() {
		return this.isleapYear(this.year);
	}

	private boolean isleapYear(int year) {
		boolean result = false;

		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			result = true;
		}

		return result;
	}

	// 각 월의 마지막 일자를 반환하는 메서드
	private int getMonthLastDay(int month) {
		int[] monthLastDays = {-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

		if (this.isleapYear()) {
			monthLastDays[2] = 29;
		}
		return monthLastDays[month];
	}

	// 서기 1년 1월 1일 부터 사용자가 입력하는 날짜까지의 전체 총 일수 반환
	public int getTotalDays() {
		int totalDays = 0;

		for (int i = 1; i < this.year; i++) {
			if (this.isleapYear(i)) {
				totalDays += 366;
			} else {
				totalDays += 365;
			}
		}

		for (int i = 1; i < this.month; i++) {
			totalDays += this.getMonthLastDay(i);
		}
		totalDays += this.day;

		return totalDays;
	}

	public String getDayOfWeek () {
		String[] dayOfWeek = {"일","월","화","수","목","금","토",};

		return  dayOfWeek[this.getTotalDays() % 7];
	}
}
```
<aside>
😮 2주전쯤 공부했던 연, 월, 일 계산 하는 코드를 객체지향식으로 바꿔 보았습니다. 아직까지 객체지향에 대해 정확하게 이해하진 못하지만, 리액트의 컴포넌트의 느낌과 매우 비슷하다는 생각이 들어서 연관하여 이해하고 있습니다. 기존의 메인메서드 페이지가 매우 길어지는 문제가 흡사 index.html이 길어져서 유지보수할때 어려움을 겪었던 생각이 오버랩되며 조금 와닿는 시간이었습니다.
</aside>
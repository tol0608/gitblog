---
title: [객체지향] 로또번호 생성
date: "2023-06-15T23:09:32.169Z"
description: "Java로 구현한 객체지향 로또번호 생성기"
tags:
  - 개발
  - JAVA
  - 객체지향
---

```java
// 다음의 배열을 이용하여 중복되지 않는 로또 번호 6개를 생성하여 크기 순서대로 출력하는 코드를 작성
// 단, 객체지향적으로 코드를 작성

// int [] lotto = new int[6];
public class Exam2 {
	public static void main(String[] args) {
		MyLotto lotto = new MyLotto();
		System.out.println("로또 번호 : " + lotto.toString());
	}
}
```

```java
public class MyLotto {
	private int[] lotto;

	public MyLotto() {
		this.lotto = new int[6];
		this.setLotto();
		this.sortLotto();
	}

	// 로또 번호 중복 검사 메서드
	private boolean isUnique(int num) {
		boolean result = true;

		for (int i = 0; i < this.lotto.length; i++) {
			if (this.lotto[i] == num) {
				result = false;
				break;
			}
		}

		return result;
	}

	// 로또 배열 초기화 메서드
	void setLotto() {
		int temp;

		for (int i = 0; i < this.lotto.length; ) {
			while (true) {
				temp = (int) (Math.random() * 45) + 1;
				if (this.isUnique(temp)) {
					lotto[i] = temp;
					i++;
					break;
				}
			}
		}
	}

	void sortLotto() {
		int temp;

		for (int i = 0; i < this.lotto.length - 1; i++) {
			for (int j = i + 1; j < this.lotto.length; j++) {
				if (lotto[i] > lotto[j]) {
					temp = lotto[i];
					lotto[i] = lotto[j];
					lotto[j] = temp;
				}
			}
		}
	}
	int[] getLotto(){
		return lotto;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		for (int num : lotto) {
			sb.append(num).append(" ");
		}
		return sb.toString();
	}
}
```

<aside>
😮 2주전쯤 공부했던 로또번호 생성 코드를 객체지향식으로 바꿔 보았습니다. 엄청 복잡한 로직과 메서드 등이 있는것과 별개로 메인메서드는 단, 두 줄로 랜덤 로또번호가 생성된다는게 복잡미묘한 생각이 들게 되었습니다. 항상 일을 복잡하게만 생각할것이 아니라 본질을 보고 필요한 최소한의 사고로 필요기능을 구현할 수 있는 능력을 키워야한다는 생각이 들었습니다.

</aside>
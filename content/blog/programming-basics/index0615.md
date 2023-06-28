---
title: 프로그래밍 기초 14
date: "2023-06-15"
description: "인터페이스"
tags:
  - 개발
  - 프로그래밍 기초
  - 객체지향
---

- 인터페이스(interface)

  추상 인터페이스들의 집합입니다. (상수까지 멤버로 가질 수 있습니다.)

  🎚️ 리모콘

  인터페이스는 클래스와 달리, 구현할 메서드들을 정의만 하고, 구현은 하지 않습니다. 이는 인터페이스를 구현하는 클래스에서, 인터페이스에 정의된 메서드들을 모두 구현하도록 요구하기 위함입니다.

  인터페이스를 선언하는 방법은 다음과 같습니다.

    ```java
    public interface InterfaceName {
        public void method1();
        public void method2();
        public void method3();
    }
    ```

  위 코드에서 `InterfaceName`은 인터페이스의 이름입니다. 인터페이스에는 추상 메서드만 선언할 수 있으며, 메서드 본문을 작성하지 않습니다. 인터페이스에서 선언한 메서드들은 반드시 구현되어야 하며, 인터페이스를 구현하는 클래스에서 구현되어야 합니다.

  인터페이스를 구현하는 클래스는 다음과 같이 선언합니다.

    ```java
    public class ClassName implements InterfaceName {
        public void method1() {
            // 구현
        }
    
        public void method2() {
            // 구현
        }
    
        public void method3() {
            // 구현
        }
    }
    ```

  위 코드에서 `ClassName`은 인터페이스 `InterfaceName`을 구현하는 클래스입니다. `ClassName` 클래스는 `InterfaceName` 인터페이스에서 선언된 메서드들을 모두 구현해야 합니다.

  인터페이스는 클래스와 달리 다중 상속을 지원합니다. 즉, 하나의 클래스가 여러 개의 인터페이스를 구현할 수 있습니다. 또한, 인터페이스는 다른 인터페이스를 상속할 수 있습니다.

    ```java
    public interface Interface1 {
        public void method1();
    }
    
    public interface Interface2 {
        public void method2();
    }
    
    public interface Interface3 extends Interface1, Interface2 {
        public void method3();
    }
    
    public class ClassName implements Interface3 {
        public void method1() {
            // 구현
        }
    
        public void method2() {
            // 구현
        }
    
        public void method3() {
            // 구현
        }
    }
    ```

  위 코드에서 `Interface1`과 `Interface2`는 각각 메서드 `method1`과 `method2`를 선언하고 있으며, `Interface3`는 `Interface1`과 `Interface2`를 상속하고, 메서드 `method3`를 선언하고 있습니다. `ClassName` 클래스는 `Interface3`를 구현하여, `Interface1`, `Interface2`, `Interface3`에서 선언된 모든 메서드들을 구현하고 있습니다.

  모든 멤버 변수는 `public static final` 이어야 하며 이를 생략할 수 있습니다.
  모든 메서드는 `public abstract` 이어야 하며 이를 생략할 수 있습니다.

  - implements

    `implements` 키워드는 클래스가 인터페이스를 구현한다는 것을 나타내기 위해 사용됩니다. 인터페이스에서 정의된 모든 메서드들은 반드시 구현되어야 하며, 구현되지 않은 경우 컴파일 에러가 발생합니다. 클래스는 여러 개의 인터페이스를 구현할 수 있습니다.

      ```java
      public class ClassName implements InterfaceName {
          // ...
      }
      ```

    위 코드에서 `ClassName` 클래스는 `InterfaceName` 인터페이스를 구현하고 있습니다. 클래스에서 `InterfaceName`에 정의된 모든 메서드를 구현해야 합니다.

    인터페이스를 상속받는 인터페이스는 다음과 같이 선언할 수 있습니다.

      ```java
      public interface InterfaceName2 extends InterfaceName {
          // ...
      }
      ```

    위 코드에서 `InterfaceName2` 인터페이스는 `InterfaceName` 인터페이스를 상속받고 있습니다. 따라서 `InterfaceName`에 정의된 메서드들은 `InterfaceName2`에서도 사용할 수 있습니다.

  - 장점
    - 다중 상속이 가능하므로, 여러 개의 클래스에서 동시에 상속받을 수 있습니다.
    - 인터페이스를 구현하는 클래스들은 인터페이스의 규격을 따르므로, 코드의 일관성과 유지보수성이 높아집니다.
    - 인터페이스를 사용하면, 객체 간의 결합도가 낮아지므로, 객체 지향적인 설계가 가능합니다.
    - 인터페이스를 사용하면, 클래스와 구현을 분리할 수 있으므로, 유연한 설계가 가능합니다.
  - 단점
    - 인터페이스를 구현하는 클래스에서 모든 메서드를 구현해야 하므로, 개발 시간이 늘어날 수 있습니다.
    - 인터페이스를 사용하면, 코드의 가독성이 떨어질 수 있습니다.

- 디폴트 메서드(default method)

  인터페이스에는 JDK 1.8부터 디폴트 메서드(default method)라는 것이 추가되었습니다. 디폴트 메서드는 인터페이스에서 메서드의 구현을 제공하는 것입니다. 이는 기존의 인터페이스를 수정하지 않고도 새로운 기능을 추가할 수 있게 만들어줍니다.

  디폴트 메서드는 다음과 같이 선언합니다.

    ```java
    public interface InterfaceName {
        public void method1();
    
        public default void newMethod() {
            // 구현
        }
    }
    ```

  위 코드에서 `newMethod`는 디폴트 메서드입니다. 디폴트 메서드는 반드시 구현이 필요하며, 구현되지 않은 경우 컴파일 에러가 발생합니다.

  디폴트 메서드를 갖는 인터페이스를 구현하는 클래스는 디폴트 메서드를 오버라이드할 수 있습니다.

    ```java
    public class ClassName implements InterfaceName {
        public void method1() {
            // 구현
        }
    
        public void newMethod() {
            // 구현
        }
    }
    ```

  위 코드에서 `ClassName` 클래스는 `InterfaceName` 인터페이스를 구현하고 있으며, 디폴트 메서드 `newMethod`를 오버라이드하고 있습니다.

  디폴트 메서드는 인터페이스에서 구현을 제공하는 것이므로, 디폴트 메서드를 갖는 인터페이스를 구현하는 클래스에서는 구현할 필요가 없습니다. 따라서, 디폴트 메서드는 기존의 인터페이스를 수정하지 않고도 새로운 기능을 추가할 수 있게 만들어줍니다.


<aside>
⭐ UML(Unified Modeling Language)은 객체 지향 소프트웨어 개발에서 사용되는 표준화된 모델링 언어입니다. 소프트웨어의 구조, 행위, 상호작용 등을 시각적으로 표현할 수 있으며, 다양한 다이어그램을 통해 소프트웨어를 표현합니다.

UML은 객체 지향 소프트웨어 개발에서 많이 사용되며, 다음과 같은 다이어그램을 제공합니다.

- 클래스 다이어그램
- 객체 다이어그램
- 시퀀스 다이어그램
- 활동 다이어그램
- 상태 다이어그램
- 유스 케이스 다이어그램

각 다이어그램은 소프트웨어의 다른 측면을 나타내며, 소프트웨어 개발의 다른 단계에서 사용됩니다.

UML은 객체 지향 소프트웨어 개발에서 매우 중요한 역할을 합니다. UML을 사용하면 개발 과정에서 소프트웨어의 구조와 행위를 시각적으로 파악할 수 있으므로, 소프트웨어를 보다 쉽게 디자인하고 구현할 수 있습니다.

</aside>
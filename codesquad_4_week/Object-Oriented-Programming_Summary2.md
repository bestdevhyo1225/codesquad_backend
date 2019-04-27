## 객체 지향 - 캡슐화, 상속, 다형성, 추상화

---



* ### 캡슐화 (Encapsulation) 란 ?

> * 중요한 데이터를 보존, 보호 하는 것이다.
>
> * 캡슐화는 연관 되어 있는 변수와 메소드를 클래스로 묶는 작업을 말한다.
>
> * 캡슐화라는 작업이 클래스 만드는 것과 비슷하다고 할 수 있느나 캡슐화에는 은닉성이라는 것이 있기 때문에
> 클래스에 담는 내용 중 중요한 데이터를 외부로 부터 보호할 수 있다.
>
>  * 일반 OOP 에서 지원하는 캡슐화 ( C++, Java 등등)
> >1. **public**
> > 2. **protected**
> > 3. **private**
>  * JavaScript 에서 캡슐화
> >1. **public (기본)**
> >
> >2. **private, protected 에 ' _ ' 붙여서 선언** 
> >
> >   ex) this._name = 'hyo' 과 같이 선언하는데 **접근하지 말라는 암묵적인 약속**일 뿐이다.
>
> * 만일의 상황( 누군가가 외부에서 조작 )에 대비하여 외부에서 사용자가 속성이나 메소드를 사용할 수 없도록 숨겨 놓은것이다.
> * 속성과 메소드를 클래스로 묶고 내부에서 구현하여 외부로부터 감추는 것이다.
> * 객체가 노출하는 속성과 메소드만 사용자가 사용할 수 있다.
>   * 속성과 메소드를 보호하는 이유는 **외부의 잘못된 사용으로 인해 객체가 손상되지 않기 위해서 보호 한다.** 
>
> ![그림](https://image3.slideserve.com/5639790/4-encapsulation-n.jpg)



---



* ### 상속 (Inheritance) 이란?

> ![그림](https://player.slidesplayer.org/90/14701469/slides/slide_3.jpg)
>
>
> * 현실 세계로 따지자면 상속이란 부모가 자식에게 어떤 유산을 물려주는 행위, **부모가 자식을 선택해서 물려주는 의미**이지만
> 객체 지향 프로그래밍에서 상속은 **현실 세계와 반대로 자식이 부모를 선택해서 물려 받는 것**이다.
>
> > * 자식 (하위, 파생) 클래스가 부모 (상위) 클래스의 속성 또는 메소드를 물려 받는 것
> >
> > * **자식이 부모를 선택해서 물려 받는것**
>
> * 상속이 주는 효과는 무엇이 있을까?
>
> > 1. 상위 클래스를 **재사용**하여 하위 클래스를 빠르게 개발할 수 있다.
> >2. **중복되는 코드를 줄여 준다.** ( 중복되는 코드를 제거하는 것은 가장 중요하다고 생각 한다. )
> > 3. **유지 보수의 편리성**을 제공해준다. ( 상위 클래스에서 한번만 수정하면 하위 클래스에서 수정할 필요가 없음. )
> >4. 객체의 **다형성**을 구현할 수 있다.
>
> ![그림](https://player.slidesplayer.org/90/14701469/slides/slide_4.jpg)



---



* ### 다형성 (polymorphism) 이란?

> * 같은 타입 이지만 실행결과가 다양한 객체를 대입(이용)할 수 있는 성질이다.
> * 부모 타입에는 모든 자식 객체가 대입될 수 있으며 자식 타입은 부모 타입으로 자동 변환 된다.
> * 하나의 메소드나 클래스가 있을때 다양한 방법으로 동작하는 것을 의미 한다.
> *  키보드의 키를 통해서 이해 해보자
>
> > * 키보드의 키를 사용하는 방법은 '누른다' 이다.
> > * 하지만 똑같은 방법의 키라고 하더라도 Esc는 취소 Enter는 실행의 목적을 가지고 있다.
>
> * 다형성이란 **동일한 조작 방법으로 동작(누른다)**시키지만 **동작 방법은 다른것(Esc는 취소, Enter는 실행)**을 의미 한다.
> * Overloading 과 다형성
>
> > * **참고로 overloding 이 다형성인지 아닌지에 대해서는 이견이 존재하는 것으로 보인다.**
> > * 하지만 overloding 은 가장 이해하기 쉬운 다형성의 예라고 할 수 있다.
>
> ```java
>   class Obj {
>       public void a(int param) {
> 	        System.out.println("숫자출력");
>           System.out.println(param);
>       }
>   
>       public void a(String param) {
>   	        System.out.println("문자출력");
>           System.out.println(param);
>  	    }
>   }
>
>   public class PolymorphismOverloadingDemo {
>  	    public static void main(String[] args) {
>   	        Obj obj = new Obj();
>           obj.a(1);
>           obj.a("one");
>  	    }
>   }
> ```
>
> > * 클래스 Obj 의 메소드 a는 2개의 본체를 가지고 있는데 하나의 이름인 a 를 공유하고 있다.
> > * 같은 이름이지만 서로 다른 동작 방법을 가지고 있기 때문에 오버로딩은 다형성의 한 예라고 할 수 있다.
>
> * Steve 와 Rachel 예시를 통해 다형성 이해하기
>
> > * Steve 는 집에서는 아버지이고 직업적으로는 프로그래머이다. 또 종교단체에서는 신도(believer)가 될 수 있다.
> > * 하나의 사람이지만 그가 어디에 있는지 누구와 관계하는지에 따라서 아버지이며 프로그래머이자 신도이다.
> > * Rachel 은 집에서는 엄마이고 직업적으로는 프로그래머이다.
> > * 중요한 것은 Steve 와 Rachel 은 직장에서 프로그래머이고 다른곳에서 무엇이든지 신경쓰지 않는다.
> > * 따라서 직장에서는 코딩을 요청하면 된다. 하지만 실력이나 성향에 따라 Steve 와 Rachel 의 결과물을 달라질 것이다. 
> > * 이러한 관계를 코드로 표현해 본다면 다음과 같다.
>
> ```java
>   interface father() {}
>   interface mother() {}
>   interface believer() {}
>   interface programmer() {
> 	    public void coding();
>   }
> 
>   class Steve implements father, believer, programmer {
> 	    public void coding() {
>    	    System.out.println("fast!");
>       }
>   }
> 
>    class Rachel implements mother, programmer {
> 	    public void coding() {
>    	    System.out.println("elegance~");
>       }
>   }
> 
>   // 직장에서..
>   public class WorkSpace {
> 	    public static void main(String[] args) {
>    	    programmer employee1 = new Steve();
>    	    programmer employee2 = new Rachel();
>    
>    	    employee1.coding();	// fast!
>    	    employee2.coding();	// elegance~
>       }
>   }
> ```
>
> > * Steve 와 Rachel 의 사용자인 직장(WorkSpace)에서는 Steve 와 Rachel 의 인터페이스인 programmer를 통해서 두 사람과 관계 한다.
> >
> > * 회사에서는 코딩할 수 있는 사람이 필요하고 어떤 사람이 programmer 라는 인터페이스를 구현하고 있다면
> >   그 사람은 반드시 coding 이라는 메소드를 구현하고 있을 것이다.
> >
> > * 하지만 두 사람의 성향과 업무 능력에 따라 다른 결과물은 다르다.
>
> * 결론 ( 내가 이해한 다형성 )
>
> > * 다형성이란 동일한 조작을 할 수 있는 어떠한 정보나 기능을 제공해 준다. ( interface 제공 )
> >
> > * 나와 다른사람이 똑같은 기능을 사용하지만 어떻게 사용하냐에 따라서 결과물이 달라지는 것을 말한다.
> >     ( 나와 다른 사람이 다른 형태를 지니고 있는 것이라고 이해 하고 있다. )
> >    ( 키보드에서 '누른다' 를 통해 A키는 다른 형태를 띄우고 있고, B키는 또 다른 형태를 띄우고 있는것이 특징  )
> >   ( Steve는 빠르게 코딩을하고, Rachel은 우아하게 코딩을 한다. )
> >



---



* ### 추상화 (Abstraction) 란?

>* 객체는 실제 세계(real world)를 모델링 하는것이다.
>* 객체 지향 프로그래밍(OOP) 는 실제 세계를 모델링 하기 위해 추상화(Abstraction)을 사용하는 프로그래밍 패러다임
>* 추상화란 ? **상세한 정보는 무시하고 필요성에 의해 있어야할 정보들만 간추려서 구성하는 것이다.**
>* 사람 객체를 추상화 한다면 다음과 같을 것이다.
>
>> 1. 심장
>> 2. 눈, 코, 입
>> 3. 이름
>> 4. 성별
>> 5. 먹는다.
>> 6. 잔다.
>
>* 하지만 사람은 날 수 없기 때문에 '날다' 라고 추상화 할 수는 없다. 
>* 이렇게 공통적으로 가질 수 있는 정보들을 추상화 한다고 하며 이를 프로그래밍 세계에서 접목시킨 것이 
>객체 지향 프로그래밍이다.
>* 즉, 추상화란 **공통점을 뽑아내는 것**이다.
>
>> * 객체들의 공통적인 속성과 행위를 뽑아내는 작업
>> * 코드상에서 구현 부분을 제외한 오직 선언 부분만을 설계하는 것을 말한다.
>
>* 추상화를 이해 하기 위한 또 다른 예시 ( 카메라 )
>
>![그림](https://t1.daumcdn.net/cfile/tistory/991938455B48CF8830)
>
>> * **"복잡한 것은 몰라도 되고 이것만 써!"**
>>* 카메라에는 사진을 찍는 **버튼**이 있는데 사진기에 특별히 관심이 많은 사람이 아니라면, 버튼을 눌렀을때
>> 어떤 원리에 의해서 사진이 찍히며 그것이 어떻게 메모리에 저장되는지 구체적으로는 알지 못한다.
>> * 그런데 누구나 **"버튼을 누르는 것만으로 쉽게 사진을 찍을 수 있다."** 라는 것을 알고 있다.
>>이것이 바로 **추상화** 이다.
>> * 즉, 객체를 활용할 때 사용자는 객체를 만든 사람이 어떤 원리로 그 객체를 구성했는지 코드를 완벽히
>>   이해하지 않아도 된다.
>>* 그냥 사용 설명대로 객체를 가져다 쓰면 되는것이다.
>> 



---

### 참고 사이트

[https://webclub.tistory.com/156?category=501048](https://webclub.tistory.com/156?category=501048)

[https://www.opentutorials.org/course/1223/6127](https://www.opentutorials.org/course/1223/6127)

[https://developerdk.tistory.com/5](https://developerdk.tistory.com/5)

[https://slidesplayer.org/slide/14701469/](https://slidesplayer.org/slide/14701469/)

[https://www.slideserve.com/errol/5](https://www.slideserve.com/errol/5)

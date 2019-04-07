# linux-summary

< 다중 사용자 >
    
    [ id ] : 자신이 누군지 알 수 있는 명령어
    
    [ who ] : 현재 시스템에 누가 접속했는지를 보여주는 명령어
    
< 관리자와 일반 사용자 >

    super(root) user : 현재 시스템에서 전지전능한 권력을 가지고 있는 가장 강력한 사용자
    user : 일반적인 사용자
        
    super(root) user 가 되는 법
    
    [ su ] : 사용자를 바꾸고 싶거나 super user 가 되고 싶을때 사용하는 명령어
    
    [ su - root ] : super user 가 되겠다는 명령어
    
    [ sudo passwd -u root ] : root 사용을 풀기 위한 명령어 (lock 을 풀어야함)
        -u 는 unlock 을 의미함
        
    [ sudo passwd -ㅣ root ] : root 사용을 막기 위한 명령어
        -l 은 lock 을 의미함
        
< 사용자 추가 >

    사용자를 추가해야 하는 방법 외울 필요가 없다.
    사용해야하는 경우가 생기면 직접 찾아보고 하면 된다. 
    
    [ sudo useradd -m duru ] : 'duru' 라는 사용자를 추가하고, 홈 디렉토리를 만들어준다.
    
    [ sudo passwd duru ] : 'duru' 라는 사용자의 패스워드를 만들어주는 명령어
    
    'duru' 라는 사용자가 sudo 명령어를 사용할 수 있도록 하려면 직접 검색해서 찾아보고 공부합시다.

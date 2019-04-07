# linux-summary

< 프로세스 ( Process ) >

    CPU      -> Processor
    RAM      -> Memory
    SSD, HDD -> Storage
    
    Memory 와 Storage 는 정보를 저장한다는 공통점이 있다.
    
    Storage 특징
        - 가격이 저렴하다.
        - 저장 용량이 크다.
        - 속도가 느리다.

    Memory 특징
        - 가격이 비싸다.
        - 저장 용량이 적다.
        - 속도가 빠르다.
        
    Processor 의 처리 속도는 굉장히 빠르다. 그래서 Storage 처리 속도가 따라갈 수가 없다.
    Memory 는 Processor 의 처리 속도를 따라갈 수 있다.
    프로그램이 실행되는 과정을 살펴보자
        1. Storage 에 있는 프로그램을 읽는다.
        2. Memory 에 적재 시킨다. (실행되지 않는 프로그램은 Memory 에 올라 오지 않는다.)
        3. Memory 에 올라와 있는 상태를 Processor(CPU) 가 읽어서 동작하고 데이터를 처리한다.
    따라서, 다음과 같은 Storage -> Memory -> Processor(CPU) 이런식으로 설계되어 있다.

    mkdir, top, rm 와 같은 command 프로그램들은 /bin, /sbin 디렉토리에 기본적으로 파일의 형태로 저장되어 있고
    그 파일은 Storage 에 파일이 저장되어 있는것이다.
        * 파일에 저장되어 있는것        -> Program
        * 실행되고 있는 상태의 프로그램   -> Process (Process 를 처리하는 것이 Processor 즉, CPU에서 처리 한다.)
        
    [ ps ] : 프로세스 리스트를 보여주는 명령어
    
    [ ps aux ] : 백그라운드에서 돌아가는 많은 프로세스들을 보여주는 명령어
    
    [ ps aux | grep apache ] : ps aux 출력을 grep 이 입력으로 받아서 apache 를 포함한 프로세스만을 보여주는 명령어
    
    [ sudo kill 프로세스 ID ] : 프로세스 ID(식별자)에 해당되는 프로세스를 강제로 종료한다.
    
    [ sudo top ] : 프로세스 리스트를 보여주는 명령어
    
    [ sudo htop ] : 프로세스 리스트를 보여주는 명령어 (htop 프로그램을 다운받아야함 )
        RES : 실제적인 프로그램 사용량을 보여줌
        Load Average : CPU 의 점유율과 관련된 내용
            첫 번째 자리 -> 1분 간의 CPU 점유율
            두 번째 자리 -> 5분 간의 CPU 점유율
            세 번째 자리 -> 15분 간의 CPU 점유율
            
< 파일을 찾는 법 >

    [ locate ] : 검색을 작업을 수행할 때 디렉토리를 찾지 않고, 데이터 베이스를 찾는다.
                 locate 가 사용하는 데이터 베이스를 mlocate 라고 부른다.
                 mlocate 안에 있는 파일의 목록은 sudo updatedb 명령을 실행하면 명령에 의해서 현재 컴퓨터에 있는 파일들에 대한 정보들이 저장이 된다.
                 많은 리눅스 시스템에서는 하루에 한 번씩 정기적으로 이 작업을 처리하게 되어 있다.
                 
    [ find ] : 디렉토리를 찾는다. 성능상으로는 locate 보다 좋지 않을 수 있다.
    
    [ find / ] : root 디렉토리(/)부터 찾겠다.
    
    [ find . ] : 현재 디렉토리(.)부터 하위 디렉토리까지 찾겠다.
    
    [ find . -name abc.txt ] : 현재 디렉토리(.)부터 하위 디렉토리까지 찾는데 파일이름(-name)으로 abc.txt 를 찾겠다.
    
    [ find ~ -name abc.txt ] : 자신의 홈 디렉토리(~)부터 하위 디렉토리 까지 찾는데 파일이름(-name)으로 abc.txt 를 찾겠다.
    
    * find 명령어는 복잡하고 기능이 많기 때문에 직접 찾아서 공부해야 한다. *
    
    [ find . -type f -name tecmint.php ] : 파일의 확장자를 f 로 지정할 수 있다. (-type f)
    
    [ whereis ] : 원하는 실행파일을 찾아주는 명령어

    [ $PATH ] : 환경 변수 
    
    
< 백그라운드 실행 >
    
    에디터에서 편집하다가 'Ctrl + o' 로 저장을 한 뒤, 'Ctrl + z' 단축키를 누르면 fore ground 에 있다가 back ground 로 빠진다.
    이 상태에서 'fg' 라는 명령어를 입력하면 다시 원래 작업했던 에디터로 돌아간다. 또한 'jobs' 라는 명령어를 입력하면 현재 백그라운드로
    실행되고 있는 프로그램을 보여준다.

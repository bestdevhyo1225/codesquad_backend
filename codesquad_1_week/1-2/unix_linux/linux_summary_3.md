# linux-summary

< wget >

    [ wget ] : url 을 통해서 파일을 다운로드 할 수 있음
        
        ( 사용 방법 )
            wget http://www.~~~.~~~
            
        ( 다운로드를 받고 paris.jpg 라는 이름으로 저장이 된다. )
            wget O paris.jpg http://www.~~~.~~~

< 왜 CLI 인가? >
    
    1. GUI 방식 보다 CLI 가 더 적은 에너지를 사용함
    2. 순차적인 실행 - 세미콜론 ( mkdir test; cd test ==> test 디렉토리를 만들고 나서, test 디렉토리로 이동한다. )

    [ grep ] : 지정한 패턴과 일치하는 모든 행을 출력하는 명령어
        
        ( linux.txt 파일에서 linux 라는 단어가 포함되어 있는 행을 찾아준다. )
            grep linux linux.txt
            
        ( 사용 설명서에서 sort 라는 단어가 포함되어 있는 행을 찾아서 보기 )
        ( 파이프 키 '|' 사용 )
            ls --help | grep sort
            man ls | grep sort
           
    [ ps aux ] : 실행되고 있는 프로그램들 볼 수 있는 명령어
    
        ( 실행되고 있는 프로그램중에서 apache 라는 패턴이 있는 행들만 출력 )
            ps aux | grep apache
        
< IO Redirection >

    [ > 또는 1> ] : Standard Output 에 대한 Redirection
    
        ( 리스트를 출력을 방향 전환하여 result.txt 에 입력함 )
            ls -l > result.txt
            ls -l 1> result.txt
        
            * '-l, -al' 들은 ls 프로그램에 들어오는 입력값중 하나이다. 실행될 때 전달되는 값을 'Command-line Arguments' 라고 한다. *
            
    [ >> ] : Standard Output 에 대한 Redirection 의 결과를 덧 붙인다. append 와 같은 개념
            
        ( result.txt 에 있는 내용에 ls -l 결과를 덧 붙인다. )
            ls -l >> result.txt
              
    [ 2> ] : Standard Error 에 대한 Redirection
    
        ( rename.txt 파일을 삭제할 때 에러가 발생하면 error.log 에 에러 내용이 저장된다. )
            rm rename.txt 2> error.log
            
    [ < ] : Standard Input 에 대한 Redirection
    
        ( hello.txt 에 있는 내용을 입력으로 받는다는 뜻 )
            cat < hello.txt
            
            * cat hello.txt 와 cat < hello.txt 차이 *
              cat hello.txt 는 'Command-line Arguments' 를 통해서 전달된 값
              cat < hello.txt 는 'Standard Input 의 Redirection ' 을 통해서 전달된 값
              
    [ head ] : 기본 10줄만 출력한다.
    
        ( 1줄만 출력하도록 하는 것 )
            head -n1 linux.txt

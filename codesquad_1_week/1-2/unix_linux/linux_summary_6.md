# linux-summary

< 항상 실행 (daemon, service) >

    'daemon' 이라는 프로그램들은 항상 실행되고 있다는 특성을 갖고 있다.
    'ls, mkdir, rm' 과 같은 프로그램들은 우리가 필요할때 켜고 필요없을때는 꺼져 있는 프로그램
    
    server 라고 불리는 프로그램들은 daemon 에 해당된다.
    대표적인 웹 서버에는 apache 라는 웹 서버가 있다.
    /etc 에는 기본적으로 daemon 프로그램들이 위치해 있는 디렉토리
    
        [ apachectl -v ] : 아파치 버전 확인하기
        
        [ sudo apachectl start ] : 아파치 시작하기
            -> localhost 또는 127.0.0.1 접속한 후, It works! 메시지 확인하기
            -> 기본 index 페이지는 /Library/WebServer/Documents 폴더에 존재
        
        [ sudo apachectl stop ] : 아파치 종료하기
        
        [ sudo apachectl restart ] : 아파치 재시작하기
        
    참고 사이트 : https://xho95.github.io/macos/apache/webserver/mod_wsgi/2016/10/02/Apache-WebServer.html

< 정기적으로 실행 (cron) >

    'cron' 은 정기적으로 명령을 실행시켜주는 도구 또는 소프트웨어이다.
    정기적으로 처리해야할 작업들을 cron 이라는 프로그램을 통해서 목적을 달성할 수 있다.

    [ crontab -e ] : 하고자 하는 일을 정의할 수 있다.
    
        m h  dom mon dow    command
        
        m       -> 시작 하고자 하는 분
        h       -> 시작 하고자 하는 시간
        dom     -> day of month, 매달 몇일날 할 것인지
        month   -> 몇 월
        dow     -> 요일

    [ crontab -l ] : 처리한 목록을 볼 수 있다.
    
    참고 사이트 : https://zetawiki.com/wiki/리눅스_반복_예약작업_cron,_crond,_crontab
    
< 쉘을 시작할 때 실행 >

    [ alias l='ls -al' ] : alias 는 별명이라고 할 수 있음, l 을 입력하면 ls -al 명령어가 실행 된다.
    
    [ alias ..='cd ..' ] : cd .. 이것을 .. 대체하여 사용할 수 있도록 한다.
    
    구체적으로 알아보려면 직접 검색해서 찾아보고 공부하기

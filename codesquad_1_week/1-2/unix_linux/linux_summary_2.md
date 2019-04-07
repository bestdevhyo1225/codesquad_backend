# linux-summary

< sudo >
    
    [ sudo ] : Super User Do, 최고 관리자 내리는 명령을 뜻한다.
               최고관리자의 권한을 빌리는 것으로 root 계정으로 sudo 를 사용하면 경고가 뜬다.
               
               
<  파일 편집 ( nano ) >
    
    [ nano ] : 파일을 만들고 편집할 수 있는 편집기
        
        ( 파일 저장 하기 )
            Ctrl + O
        
        ( 프로그램 끄기 )
            Ctrl + X
        
        ( 현재 라인을 삭제하기 -> Cut Text )
            Ctrl + K
        
        ( 현재 문자 블록이 설정하기 -> Mark Set )
            Ctrl + ^ (Ctrl + Shift + 6) 
        
        ( 삭제한 한 것 되돌리기 -> UnCut Text )
            Ctrl + U 
        
        ( 복사하기 )
            1) Ctrl + ^ : Mark Set 을 이용하여 블록 설정한다.
            2) Ctrl + K : Cut Text 를 한번 진행 한다.
            3) Ctrl + U : 원하는 위치에 UnCut Text 를 진행 한다.
            
        ( 메뉴얼 보기 )
            Ctrl + G
            
        ( 편집기에서 특정 단어나 문자를 검색하기 )
            Ctrl + W
            
< homebrew >
    
    [ brew ] : 어떤 프로그램을 설치해주는 일종의 Installer 와 같은 역할을 한다. (패키지 매니저)
    
        ( homebrew 의 기본적인 사용법을 볼 수 있는 명령어 )
            brew help
            
        ( 프로그램이 실제로 homebrew 를 통해서 설치할 수 있는지 없는지를 체크할 때 사용하는 명령어 )
            brew search htop
            * htop ? 터미널 환경에서 컴퓨터의 현재 상태(CPU 점유울, Memory 사용율)를 모니터링 할 수 있는 프로그램 *
            
        ( 프로그램 설치 명령어 )
            brew install htop
            
        ( 관리자 권한으로 컴퓨터의 상태를 보는 명령어 )
            sudo htop
            
        ( 내 컴퓨터에서 homebrew 를 통해서 설치한 프로그램들의 목록 보기 )
            brew list
            
        ( 프로그램 삭제 하기 )
            brew uninstall htop
            
        ( 특정 프로그램 업그레이드 )
            brew upgrade htop
            
        ( 모든 프로그램 업그레이드 )
            brew upgrade
            
        ( homebrew 를 통해서 설치된 프로그램들을 최신 버전으로 맞추는 명령어 )
            brew update
            * 오래된 버전의 프로그램이 존재하는 경우가 있다. 따라서 brew update 를 하고나서 brew install 을 진행할 것을 권장. * 
            
    
    

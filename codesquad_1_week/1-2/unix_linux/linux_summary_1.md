# linux-summary

< 디렉토리와 파일 >
    
    [ ls ] : 현재 디렉토리의 파일 목록을 출력하는 명령어 
        ex) ls -l
        
        (감춰진 파일까지 보려고 할때)
            ls -al
            
        (파일 사이즈를 기준으로 정렬해서 보려고 할때)
            ls -S
    
    [ pwd ] : 현재 위치하고 있는 디렉토리를 알려주는 명령어
    
    [ mkdir ] : 새로운 디렉토리를 생성할때 사용하는 명령어
        ex) mkdir 새로 생성할 디렉토리명
            
        ( -p, --parents : 필요하면 부모 디렉토리를 생성하고 자식 디렉토리를 만든다. )
            mkdir -p dir1/dir2/dir3/dir4
            mkdir --parents dir1/dir2/dir3/dir4  

        ( 여러개의 디렉토리를 만들때 )
            mkdir dir1 dir2
            
    [ cd ] : 현재에서 다른 디렉토리로 이동할때 사용하는 명령어
        ex) cd 이동할 디렉토리명
        
            * 상대 경로 : 현재 디렉토리의 위치를 기준으로 다른 디렉토리의 위치를 표현하는 것
                ex) ..      -> 부모 디렉토리를 의미
                    .       -> 현재 디렉토리
                    cd ..   -> 현재 디렉토리의 부모 디렉토리로 이동하는 명령어
                
            * 절대 경로 : 최상위 디렉토리를 기준으로 경로를 표현하는 것
                ex) /       -> 최상위 디렉토리 root 디렉토리
                    cd /    -> 최상위 디렉토리로 이동하겠다.
        
    [ rm ] : 파일이나 디렉토리를 삭제할때 사용하는 명령어
        ex) rm 파일명
            rm -r 디렉토리명
            
    [ touch ] : 파일의 날짜시간정보를 변경하는 명령어 ( 빈 파일을 생성하기도 함. )
        ( 빈 파일 생성 )
            touch newfile.txt
            
        ( 현재 시간으로 파일 날짜 정보 변경 )
            touch -c newfile.txt
            
        ( 파일 날짜 정보를 마음대로 변경, YYYYMMDDHHMM 형식 )
            touch -t 201903151238 newfile.txt
            
        ( 지정한 파일의 날짜시간정보를 지정한 다른 파일의 날짜시간정보와 동일하게 변경, newfile을 oldfile 날짜정보와 같게 변경 )
            touch -r oldfile.txt newfile.txt
            
    [ cp ] : 파일을 복사할때 사용하는 명령어    
        ( cp.txt 파일을 dir1/cp.txt 에 복사 )
            cp cp.txt dir1/cp.txt
            
        ( home 디렉토리의 하위 디렉토리까지 home2 에 복사 )
            cp -r /home /home2
            
        ( 복사할때 파일의 소유자, 그룹자, 권한, 시간정보등이 그대로 복사 )
            cp -rp /home /home2
        
    [ mv ] : 파일을 이동하거나, 파일의 이름을 바꿀때 사용하는 명령어
        ( mv.txt 파일이 dir1 디렉토리로 이동 )
            mv mv.txt dir1/mv.txt
            
        ( 파일의 이름을 바꿀때 )
            mv rename.txt rename2.txt
            
    [ echo ] : 주어진 문자열을, 문자열 사이에 포함된 공백과 줄 마지막에 개행문자를 포함하여 표준출력으로 출력하는 명령어
        ex) echo "문자열"
    
< --help 와 man >

    [ --help ] : 간단한 메뉴얼 페이지를 보여준다.
        ex) mkdir --help
            rm --help
            cd --help
        
    [ man ] : 상세한 메뉴얼 페이지를 보여준다.
        ex) man mkdir
            man rm
            man cd

< 필요한 명령을 검색으로 찾는법 >

    검색창에 
    "create in linux"
    "file copy in linux"
    "file move in linux"
    이런식으로 검색해서 사이트를 보면서 공부하면 된다.
    (궁금하면 알아서 찾아서 공부하자)
    
    
    

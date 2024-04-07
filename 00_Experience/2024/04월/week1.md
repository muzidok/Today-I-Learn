# <center>📆 4월 1일</center>

오늘부터 java swing과 jframe을 사용한 프로젝트를 시작했다.  
우선 프로젝트 주제와 기능을 정하고, 각자 하고싶은 역할을 선택했는데 데이터베이스를 다들 내켜하지않아서 내가 해보겠다고 했다.

### ERD 설계 및 Table 수정

첫날이라 주제,역할분담,ERD 논의를하고 헤산하였는데,나는 남아서 간단하게 ERD와 테이블을 생성해봤다.

![](https://velog.velcdn.com/images/kimsu10/post/25b2fdd4-f544-4f13-bacf-68de6ee9368c/image.png)

음..  
crew와 user_crew가 구체적으로 어떤 역할을 하는지 모르겠다.  
내일 물어보기로..

> [노션 ERD 페이지](https://www.notion.so/c5c925c7eaec4c1d8e687839668ecb4f)

> **Issue**
>
> 회의를 하면서 네이밍컨밴션으로 논의가 있었다.  
> PK로id를 쓸지, no를 쓸지, 사용자계정을 account를 쓸지, user_id를 쓸지..그렇게 다수결에의해 no와 user_id를 사용하기로했다.  
> 평소에 쓰던 방식과달라서 어색했지만 모두가 편하다면야..
> 한편으로는 왜 회사에서 네이밍컨벤션으로 싸운다는지 좀 알거 같다.

---

# <center>📆 4월 2일</center>

ERD와 테이블을 만들어서 팀원들에게 보여주니 다들 너무 좋아했다.😊  
덕분에 테이블의 관계 재정의를 빠르게 진행 할 수 있었는데, 진행하다보니 테이블 구조와 관계가 엄청나게 바뀌었다.

### ERD 및 CREATE문 재생성 + 왜래키 지정

![](https://velog.velcdn.com/images/kimsu10/post/a322dc07-3a08-4c6b-8f95-2630d476796a/image.png)

> **오늘의 생각**
>
> **1. 과감하게 버리자**  
> 생성해둔 테이블에서 하나씩 왜리키를 풀고 다시 지정했는데, 오타가 있어서 결국 드랍하고 다시 처음부터 만들었다.
>
> **2. 시험삼아 해본것이라도 어딘가에 적어두자.**  
> SQL문을 어디에도 저장해두지않아서 다시 쓰느라 시간을 많이 낭비했다.
> 노션에 적어두고 다 해서 뿌듯해하고 있었는데 테이블명 users를 user로 바꿔달라는 요청이 들어왔다.  
> 정말이지 노션에 적어둬서 다행이였다.

---

# <center>📆 4월 3일</center>

오늘은 팀원 두분이 아파서 빠지게 되었다.  
안그래도 다른팀보다 인원이 적은데 3명이서 뭔가를 결정하기 애매해서 UI를 그려보며 필요한 기능을 적어보기로했다.

### UI 및 Table 데이터 넣기

항상 아이패드로 그리던 두명에게 canva 사용법을 알려주고 함께 만들었는데, 너무 좋아하셨다.  
셋이서 즐겁게 만들었다 ㅎㅎ

> [UI 페이지](https://www.canva.com/design/DAGAmfD-uRU/LcNs91_Vm_0uta1UA_diHA/edit)

UI를 완성하고 INSERT 문을 작성하는데 아직 Image가 없어서 image를 빼고 작성하였다.

```sql
INSERT INTO `udongmate`.`ground` (`gr_no`, `gr_name`, `gr_cycleok`, `gr_dogok`, `gr_dist`, `gr_img`, `addr_no`, `lev_no`, `gr_info`) VALUES (1, '여의도 공원', 1, 1, 2.5, 'null', 19, 1, 'null');
```

> **오늘의 생각**
>
> **1. DB는 막노동의 연속이다.**  
> insert문으로 데이터를 넣는데 절반정도가 들어가지않았다.  
> 엑셀의 value 순서가 다르거나 int여야할곳에 string이 포함되어있거나, not null로 정하였는데 null이거나 하는 문제가 있었다.  
> 결국 하나하나 손으로 수정해서 넣었는데, 왜 집에갈 시간이지..?  
> 그래도 DB에서 다양한 시행착오를 겪어볼수있어서 좋은 경험이였고 재밌었다.

---

---

# <center>📆 4월 4일</center>

### database에 Image 넣기

처음에 이미지를 varchar로 설정했었는데, BLOB로 해야한다고해서 바꿨던게 더 어려운 결과를 초래했다.
이미지 73KB가 굉장히 컸던것.. select를 해보니 엄청난 길이의 바이트코드가 출력되었고 다시 varchar로 바꾸게되었다.  
여기서 또 논의의 시작

> **ISSUE**  
> AWS vs 각자의 컴퓨터 경로에 img저장하기  
> 나는 AWS를 사용해서 이미지를 불러오면 각자의 컴퓨터에서 쉽게 데이터를 받아올 수 있으니 AWS를 사용하자했으나,  
> 각자의 컴퓨터에 똑같은 경로에 폴더를 생성해서 사용하기로 결정되었다.  
> 프로젝트 경험이 없다고해서일까 프로젝트 해봤다는 팀원의 의견이 전적으로 수렴되는게 좀 아쉽다.  
> 그래도 해봤다고 아는척하면서 처음하는 사람들 생각이나 경험을 막는게 아닐까 싶어 그렇게 하겠다고했다.  
> 하지만 밤에 공유DB라는 해결책을 찾았다.^^

---

# <center>📆 4월 5일</center>

DB를 다하고 프로시저랑 트리거를 만들어볼까 했는데 아직 어떤걸로 만들지 정하지않아서 MyPage를 내가 만들어보겠다고 했다.

### JFrame 과 JLabel

다른 팀원들이 만든 코드를 보면서 하나씩 만들어나갔는데 css가 그리워졌다.  
그래도 일단 만들어봤는데
![](https://velog.velcdn.com/images/kimsu10/post/c0cf0fd9-86a8-4bbf-8484-af478cdbb72a/image.png)
팀원들이 사진을 NAV탭에 넣는다고 겉의 색을 검은색으로 넣어버렸다.
![](https://velog.velcdn.com/images/kimsu10/post/0210dde7-d6e9-444c-960a-d2cda55a3345/image.png)
수정해서 팀원들에게 보여주었는데, 명함처럼 중간에 띄우자고 하였다.
어떻게 해야할지 모르겠어서 컨테이너를 여러개 만들고 여백을 주면서 위치를 잡았는데.. 이게..맞는걸까..?
![](https://velog.velcdn.com/images/kimsu10/post/1c6ef7ce-26a0-434b-a7d6-d9ffd4db587c/image.png)

이제 개인정보들은 TextArea를 띄우면 되지않을까?  
일단 오늘은 여기까지..

---

# <center>📆 4월 6일</center>

TextArea를 만들려고했는데 다른팀원분이 마이페이지를 거의 다만들었다고해서 일단 프로시저를 만들어보기로 했다.

### Procedure 만들기

```sql
DELIMITER //

CREATE PROCEDURE checkUser (
    IN input_id VARCHAR(30),
    IN input_pw VARCHAR(100),
    OUT result BOOLEAN
)
BEGIN
    DECLARE is_user BOOLEAN DEFAULT FALSE;
    DECLARE user_password VARCHAR(100);

    SELECT EXISTS(SELECT user_id FROM udongmate.user WHERE user_id = input_id) INTO is_user;

    IF is_user THEN
        SELECT user_pw INTO user_password FROM udongmate.user WHERE user_id = input_id;

        IF user_password = input_pw THEN
            SET result = TRUE;
        ELSE
            SET result = FALSE;
        END IF;
    ELSE
        SET result = NULL;
    END IF;
END //

DELIMITER ;

call checkUser("maru", "0424", @result);

```

팀내에서 프로시저를 정하지못해서, 가장쉬운 로그인 프로시저를 만들어서 팀원에게 어떤지 물어보았다.

로그인을 담당하는 팀원분이 user_no를 불러올 수 있는지 물었고,
시도해봤는데 user_no만 불러오지 못했다.

**원인**은 **프로시저에서 여러개의 OUT 매개변수를 반환하지 않는**데, 내가 `@result`와 `@user_no`로 두개를 반환해서 가장 처음의 result값만 반환하는 거였다.

## 사용한 sql문

```sql
DELIMITER //

CREATE PROCEDURE checkUser (
    IN input_id VARCHAR(30),
    IN input_pw VARCHAR(100),
    OUT result INT
)
BEGIN
    DECLARE is_user BOOLEAN DEFAULT FALSE;
    DECLARE user_password VARCHAR(100);
    DECLARE user_n INT;

    SELECT EXISTS(SELECT user_id FROM udongmate.user WHERE user_id = input_id) INTO is_user;

    IF is_user THEN
        SELECT user_pw INTO user_password FROM udongmate.user WHERE user_id = input_id;

        IF user_password = input_pw THEN
            SET result = 2;
            SELECT user_no, user_img, result FROM udongmate.user WHERE user_id = input_id;

        ELSE
            SET result = 1;
            select result;
        END IF;
    ELSE
        SET result = 0;
        select result;
    END IF;
END //

DELIMITER ;

call checkUser('maru','0424', @result);
```

확실히 원하는값을 SELECT로 선택해서 가져오니  
JAVA에서 처리해야할 코드가 굉장히 많이 줄어드는것을 확인할 수 있었다.

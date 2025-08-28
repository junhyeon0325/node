select *
from   t_user;

insert into t_user
set email = 'hong3@example.com',
    type = 3,
    nickname = '홍길동'
on duplicate key update type = 4, nickname = '홍길동';

-- signUp
-- insert into t_user 
-- set    ? 
-- on duplicate key update ?;

-- sellerList
select * 
from   t_seller;

-- categoryList
select * 
from   t_category;

-- imageDelete
-- delete from t_image 
-- where  id = ?;

-- imageList
select * 
from   t_image;
-- where  product_id = 1;

-- productImageInsert
-- insert into t_image 
-- set ?;

-- productInsert
-- insert into t_product 
-- set ?;

-- productMainImages
select *
from   t_image 
where  product_id = 1 
  and  type = 2;

-- productDetail
select t1.*, 
       t2.path, 
       t3.category1, 
       t3.category2, 
       t3.category3 
from   t_product t1, 
       t_image t2, 
       t_category t3
where  t1.id = 1 
  and  t1.id = t2.product_id 
  and  t2.type = 3 
  and  t1.category_id = t3.id;

-- productList2
select     t3.*, 
           t4.path 
from      (select t1.*, 
				  t2.category1, 
				  t2.category2, 
				  t2.category3 
		   from   t_product t1, 
		   		  t_category t2
           where  t1.category_id = t2.id) t3
left join (select * 
		   from   t_image
		   where  type = 1) t4
       on  t3.id = t4.product_id;

-- productList
select t1.*,
       t2.path,
       t3.category1, 
       t3.category2, 
       t3.category3 
from   t_product t1, 
       t_image t2, 
       t_category t3
where  t1.id = t2.product_id 
  and  t2.type = 1 
  and  t1.category_id = t3.id;

-- t_user 조회
select *
from   t_user;

-- t_product 조회
select *
from   t_product;

-- t_image 조회
select *
from   t_image;

-- t_category 조회
select *
from   t_category;

-- customers 테이블 조회
select *
from   customers;

show tables; -- 테이블을 보여달라

use dev; -- 여러 데이터베이스중에서 dev라는 데이터베이스를 사용하겠다

show databases; -- 내가 사용할 수 있는 데이터베이스 보는법
-- Popular Genres
SELECT
    g.name,
    count(c.genre_id)    
FROM custsales c, genre g
WHERE to_char(day_id, 'YYYY') = '2020'
AND g.genre_id = c.genre_id
GROUP BY g.name
ORDER BY 1;

select 
    customer_segment,
    round(sum(sales), 0)
from sales_dashboard
group by customer_segment
order by 2 desc;

SELECT 
    a.cust_id, 
    a.first_name,
    a.city as customer_city,
    a.state_province customer_state,
    b.chain, 
    b.address as pizza_address, 
    b.city as pizza_city, 
    b.state as pizza_state,
    round( sdo_nn_distance(1), 1 ) distance_km
FROM customer_contact a, pizza_location  b
WHERE  sdo_nn(
        latlon_to_geometry(b.lat, b.lon),
        latlon_to_geometry(a.loc_lat, a.loc_long),
        'sdo_num_res=1 unit=KM',
        1 ) = 'TRUE'
    and a.cust_id in (1266803, 1059376, 1372976, 1067362,1044859,1250340)
ORDER BY sdo_nn_distance(1) asc;

select *
from json_movie_data_ext
where rownum < 10;

select 
    j.doc.movie_id,
    j.doc.title,
    j.doc.year,
    j.doc.genre,
    translate(j.doc.genre, '["]', ' ') as genres
from json_movie_data_ext j
where rownum < 10;

SELECT 
    a.cust_id,
    a.first_name,
    a.city,
    b.cust_id as neighbor, 
    b.first_name as neighbor_name,
    b.city as neighbor_city, 
    b.state_province as neighbor_state,
    round( sdo_nn_distance(1), 1 ) distance_km
FROM customer_contact a, customer_contact  b
WHERE a.cust_id = 1059376
 AND a.cust_id != b.cust_id
 AND sdo_nn(
       latlon_to_geometry(b.loc_lat, b.loc_long),
       latlon_to_geometry(a.loc_lat, a.loc_long),
       'sdo_num_res=20 unit=KM',
       1 ) = 'TRUE';

with neighbors as (
    SELECT 
        b.cust_id -- the neighbor
    FROM customer_contact a, customer_contact  b
    WHERE a.cust_id = 1059376
    and a.cust_id != b.cust_id
    AND sdo_nn(
        latlon_to_geometry(b.loc_lat, b.loc_long),
        latlon_to_geometry(a.loc_lat, a.loc_long),
        'sdo_num_res=20 unit=KM',
        1 ) = 'TRUE'
),
neighbors_movies as (
    select 
        movie_id,
        count(*) as popularity    
    from custsales c, neighbors n -- combine sales activity with neighbors' movies
    where c.cust_id = n.cust_id
    group by movie_id  
)
select
    j.doc.movie_id,
    j.doc.title,
    j.doc.year,
    n.popularity,
    translate(j.doc.genre, '["]', ' ') as genres,
    translate(j.doc.cast, '["]', ' ') as starring    
from neighbors_movies n, json_movie_data_ext j -- combine all the above!
where n.movie_id = j.doc.movie_id
order by popularity desc nulls last
fetch first 10 rows only;       
-- Create a view across the lake and database
create or replace view sales_dashboard as
select
    ce.last_name,
    ce.first_name,
    cs.short_name as customer_segment,
    ce.income_level,
    case 
        when age > 75 then 'Silent Generation'
        when age between 57 and 75 then 'Boomer'
        when age between 41 and 56 then 'Gen X'
        when age between 25 and 40 then 'Millenials'
        when age between 9 and 24 then 'Gen Z'
        end as age_range,
    cc.country,
    cc.city,
    cc.loc_lat as latitutde,
    cc.loc_long as longitude,
    c.day_id,
    g.name genre,
    1 as views,
    actual_price as sales        
from dcat$obj_landing.customer_extension ce, custsales c, genre g, dcat$obj_landing.customer_segment cs, customer_contact cc
where ce.cust_id = c.cust_id
  and ce.cust_id = cc.cust_id
  and g.genre_id = c.genre_id
  and ce.segment_id = cs.segment_id;


-- RFM analysis
with rfm as (
    SELECT 
        last_name,
        first_name,
        country,
        customer_segment,
        NTILE (5) over (order by sum(sales)) AS rfm_monetary,
        NTILE (5) over (order by max(day_id)) AS rfm_recency,
        NTILE (5) over (order by count(1))    AS rfm_frequency
    FROM sales_dashboard
    GROUP BY        
        last_name,
        first_name,
        country,
        customer_segment
)
select *
from rfm
where 
  rfm_monetary = 5
  and rfm_frequency = 5
  and rfm_recency <= 2 
order by rfm_monetary desc, rfm_recency asc
fetch first 20 rows only;

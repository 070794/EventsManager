CREATE TABLE events(
      event_id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(100) NOT NULL,
      dt DATETIME NOT NULL,
      venue VARCHAR(100) NOT NULL,
      des VARCHAR(20000) NOT NULL,
      type VARCHAR(100) NOT NULL,
      author VARCHAR(40) NOT NULL,
      price INT,
      PRIMARY KEY ( event_id )
    );

CREATE TABLE user(
      user_id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      pass VARCHAR(20) NOT NULL,
      PRIMARY KEY ( user_id )
    );

CREATE TABLE images(
      event_id INT NOT NULL ,
      image_path VARCHAR(200) NOT NULL,
      PRIMARY KEY ( event_id , image_path )
    );

/* event1 ... */

Insert into events(title,dt,venue,type,author,price,des) 
Values ('Nishani Motte Trek With Water Rafting','2016-09-29 14:00:00','NISHANI MOTTE','Adventure','Priya',4000,
  "The Nishani Motte Trek in Coorg is one of the best ways to explore the mysticism of Coorg's nocturnal beauty; this trek will take you through its scenic as well as fascinating trails. Though the Nishani Motte trek might sound easy during the day, it showcases a different beauty of the place in the night. And for the trekker, it has a set of enjoyable and lovable challenges during the trail.");
Insert into images values(3,"ve1_0.jpg");
Insert into images values(3,"ve1_1.jpg");
Insert into images values(3,"ve1_2.jpg");
Insert into images values(3,"ve1_3.jpg");

/* event 2 */
Insert into events(title,dt,venue,type,author,price,des) 
Values ('Unleash','2016-09-02 22:00:00','OCTAVE HOTEL & SPA','Party & Nightlife','SNM palya',2500,
  "Octave Hotels presents 'Unleash Fridays' the best way to start your weekend at a great value. Unlimited drinks, lavish buffet spread, DJ, dance, music and unlimited fun for as low as Rs. 1499 (all inclusive) per person (Early bird offer price – 1199). The open bar includes a choice of unlimited beers, liquors, wine and more. You will not find a better way to start your weekend and dance your sorrows away. All inclusive couple price is Rs.2499 (Early Bird offer price – 1999).");
Insert into images values(4,"pn1_0.jpg");
Insert into images values(4,"pn1_1.jpeg");
Insert into images values(4,"pn1_2.jpeg");
Insert into images values(4,"pn1_3.jpg");

Insert into events(title,dt,venue,type,author,price,des) 
Values ('Great Malnad Challenge','2016-08-30 09:00:00','MYSORE','Sports','Karnataka cycling association',500,
  "Calling all Adventurers out there for the cycling trip of a lifetime. The Great Malnad Challenge is an All India MTB challenge which is into its 7th edition this year! What started off as a competitive challenge has now shaped into an enviable event which is pegged to be the biggest and most challenging MTB ride in South India with multiple categories and attractive rewards. All adventure enthusiasts and cyclists are invited to take part in the event and give their pedals a push.");
Insert into images values(5,"s1_0.jpg");
Insert into images values(5,"s1_1.jpeg");
Insert into images values(5,"s1_2.jpeg");



ALTER TABLE events
ADD thumb VARCHAR(100);

UPDATE events
SET thumb='ve1_0.jpg'
WHERE event_id=3;

UPDATE events
SET thumb='pn1_0.jpg'
WHERE event_id=4;

UPDATE events
SET thumb='s1_0.jpg'
WHERE event_id=5;




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

/*event 3 */

Insert into events(title,dt,venue,type,author,price,des) 
Values ('Great Malnad Challenge','2016-08-30 09:00:00','MYSORE','Sports','Karnataka cycling association',500,
  "Calling all Adventurers out there for the cycling trip of a lifetime. The Great Malnad Challenge is an All India MTB challenge which is into its 7th edition this year! What started off as a competitive challenge has now shaped into an enviable event which is pegged to be the biggest and most challenging MTB ride in South India with multiple categories and attractive rewards. All adventure enthusiasts and cyclists are invited to take part in the event and give their pedals a push.");
Insert into images values(5,"s1_0.jpg");
Insert into images values(5,"s1_1.jpeg");
Insert into images values(5,"s1_2.jpeg");

/*event 4 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Marathon','2016-09-04 14:00:00','DECATHLON','Sports','DECATHLON SPORTS INDIA',100,
"Our runs start on time so be punctual and arrive early.Registration is not transferable and not refundable.
Train well to run safe and run well.Registration packs need to be collected on Sat the 3rd of Sept at the race pack pick up at decathlon - Chikkajala near the airport - NO BIB - NO RUN - NO MEDAL - NO CERTIFICATE.
Come in 30 mins before the start of your race to ensure you warm up, meet some friends and have a great start.
Get as many of your family and friends to join us all at the looping course so that they can cheer you on at several points and get you to your personal best time and make it your funnest race as you see their placards, they photograph you and cheer loudly for you. Maybe some of them can hand out medals and certs at the finish line","s2_3.jpg");

Insert into images values(6,"s2_0.jpg");
Insert into images values(6,"s2_1.jpg");
Insert into images values(6,"s2_2.jpg");
Insert into images values(6,"s2_3.jpg");

/*event 5 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('JNANAPANA','2016-09-05 20:00:00','AMBEDKAR BHAVAN','art','Vishranthi Children’s Home',300,
'The Jnanappana is an all-time relevant composition noted for its use of opposing images through which the poet Poonthanam draws out the cosmic acts of Krishna through the web of karma. This philosophical poem is set to pure dance form by Sri Vineet and the beautiful music composed by Sri Shareth for The Art of Living to re-introduce its teachings to youngsters. Sri Shareth using different ragas has played a vital role that has been inspirational while choreographing it and also during the performance. Sri Shareth is known for his particular classical style of composing has used very simple music that everyone can sing along without compromising the musical quality. This Song of wisdom had been sung by Smt K S Chitra & Sri Vidhu Pratap - leading playback singers lending their world famous voice in pure devotion. The performance has our very own Lakshmi Gopalaswamy, in the leading role along with Sri Vineet and Deepti – TV anchor & actor in prominent parts.','art1_0.jpg');

Insert into images values(7,"art1_0.jpg");
Insert into images values(7,"art1_1.jpg");
Insert into images values(7,"art1_2.jpg");
Insert into images values(7,"art1_3.jpg");

/*event 6 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Hot Air Ballooning','2016-09-29 11:00:00','JAKKUR AERODROME','adventure','Sheetal Devaraj',3000,
'Enjoy the world at your feet as you escape into the skies in a hot-air balloon. The experience of taking in the world below like a bird, the quiet that comes with being so many hundreds of feet above the ground and the sheer thrill of being up in the air, provide unparalleled pleasures.','v2_0.jpg');
Insert into images values(8,"v2_0.jpg");
Insert into images values(8,"v2_1.jpg");
Insert into images values(8,"v2_2.jpg");
Insert into images values(8,"v2_3.jpg");

/*event 7 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Nature Adventure Camp','2016-10-07 18:00:00','NATURE ADVENTURE CAMP','adventure','Sheetal Devaraj',1750,
  'Set in the picture perfect Banantimari State Forest area, surrounded by greenery and flanked by a lake and mountain, the Nature Adventure Camp is an ideal location for a whole range of adventure activities.You can go trekking to near by hill of Banantimari hill range, you can indulge in various water activities or go Rock Rappelling and enjoy your Kanakapura night camping.','v3_0.jpg');
Insert into images values(9,"v3_0.jpg");
Insert into images values(9,"v3_1.jpg");
Insert into images values(9,"v3_2.jpg");
Insert into images values(9,"v3_3.jpg");
Insert into images values(9,"v3_4.jpg");

/*event 8 */

Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Battleram','2016-10-09 18:00:00','BATTLERAM','adventure','Battleram Event',1499,'Introducing India’s most gruelling obstacle race. Our 5 km run will test your physical strength, challenge your wits, inspire teamwork, and reward you with a rush of blood to the head. Our challenges have been created in consultation with Ex-Army personnel. These conflict-hardened experts have created zones designed to pit you against the most worthy opponent – YOURSELF!','v4_0.jpg');  
Insert into images values(10,"v4_0.jpg");
Insert into images values(10,"v4_1.jpeg");
Insert into images values(10,"v4_2.jpg");
Insert into images values(10,"v4_3.jpg");

/*event 9 */

Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Drinks Unlimited','2016-09-12 21:00:00','YAUATCHA','party','Smoke House',2499,'Food tastes best when paired with your favorite beer, wine or martini and even better when you get these with an exclusive experience. Enjoy Endless drink experience, with unlimited flowing alcohol at yauatcha, you can chose some sumptuous dim sums to go with them that adds to the experience.','pn2_0.jpg');
Insert into images values(11,"pn2_0.jpg");
Insert into images values(11,"pn2_1.jpg");
Insert into images values(11,"pn2_2.jpg");
Insert into images values(11,"pn2_3.jpg");

/*event 10 */

Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Comedy Capsules','2016-09-07 22:30:00','The Central','entertainment','Pheonix Entertainment', 300,'Phoenix entertainment presents Comedy Capsules 2016 - a compilation of 8 hilarious plays power packed into one show that will leave you in splits. Witness some amazing actors take you from LOL to ROFL like never before. Eight shades of humor await to spice up your weekend.','en1_0.jpg');
Insert into images values(12,"en1_0.jpg");
Insert into images values(12,"en1_1.jpeg");
Insert into images values(12,"en1_2.jpg");
Insert into images values(12,"en1_3.jpeg");


/*event 11 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Blank Page Tamaasha','2016-09-30 19:30:00','The Central','entertainment','AES Entertainment', 599,'Blank Page is a celebration of the spoken word through theatre, music, and movement. Poems written in English, Hindi, Marathi, and Kashmiri by some of India’s finest contemporary poets are interpreted by a group of multitalented performers. Blank Page explores themes such as conflicted relationships, political resistance, identity, and the intense act of writing itself. Blank Page opened at the Kala Ghoda Arts Festival 2015 (Literature section). It has also been performed at other prestigious events like - The Tata LitLive, Mumbai, The Akshara Calligraphy Exhibition at the Prince of Wales Museum, Mumbai, and the Vinod Doshi theatre festival, Pune.','en2_0.jpg');

Insert into images values(13,"en2_0.jpg");
Insert into images values(13,"en2_1.jpg");
Insert into images values(13,"en2_2.jpg");
Insert into images values(13,"en2_3.jpg");



/* event 12 */
Insert into events(title,dt,venue,type,author,price,des,thumb) 
Values ('Artista','2016-09-01 14:30:00','The painting club','art','The painting club', 299,'War leads to death, destruction and loss, yet we glorify bravery on the battlefield and are perpetually preparing for war. Why is it so important to fight wars when peace can breed prosperity? This play explores the psyche of 15 characters from the great epic Mahabharata in the stream of consciousness method to see if each of them could have avoided the war at some point. Was it because every character believed he/she was right that the war finally happened.','art2_0.jpg');
Insert into images values(14,"art2_0.jpg");
Insert into images values(14,"art2_1.jpg");
Insert into images values(14,"art2_2.jpg");
Insert into images values(14,"art2_3.jpg");
















ALTER TABLE events
ADD thumb VARCHAR(100);

UPDATE events
SET thumb='ve1_0.jpg'
WHERE event_id=3;

UPDATE events
SET type='party'
WHERE event_id=4;

UPDATE events
SET thumb='s1_0.jpg'
WHERE event_id=5;




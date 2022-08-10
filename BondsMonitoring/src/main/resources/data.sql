INSERT INTO db_user (name, email, role, username, password) VALUES ('Prithiraj', 'pb@db.com', 'ADMIN', 'prithiraj', 'pass1');
INSERT INTO db_user (name, email, role, username, password) VALUES ('Manish', 'mn@db.com', 'VIEWER', 'manish', 'pass2');
INSERT INTO db_user (name, email, role, username, password) VALUES ('Mihir', 'ms@db.com', 'VIEWER', 'mihir', 'pass3');
INSERT INTO db_user (name, email, role, username, password) VALUES ('Mufaddal', 'md@db.com', 'VIEWER', 'mufaddal', 'pass4');

INSERT INTO book (id, book_name) VALUES (1, 'book1');
INSERT INTO book (id, book_name) VALUES (2, 'book2');
INSERT INTO book (id, book_name) VALUES (3, 'book3');
INSERT INTO book (id, book_name) VALUES (4, 'book4');
INSERT INTO book (id, book_name) VALUES (5, 'book5');

INSERT INTO book_user (username, book_id) VALUES ('prithiraj', 2);
INSERT INTO book_user (username, book_id) VALUES ('manish', 5);
INSERT INTO book_user (username, book_id) VALUES ('mihir', 4);
INSERT INTO book_user (username, book_id) VALUES ('mufaddal', 1);

INSERT INTO counter_party (id, party_name) VALUES (1, 'Muskan');
INSERT INTO counter_party (id, party_name) VALUES (2, 'Aditi');
INSERT INTO counter_party (id, party_name) VALUES (3, 'Riya');
INSERT INTO counter_party (id, party_name) VALUES (4, 'Anushka');

DELETE FROM security WHERE id=1;
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (1, 'ABCDEFGHIJ1', 'XYZCVBNMLK1', 'Company1', '2022-08-06', 10.2, 'Secured', 1000, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (2, 'ABCDEFGHIJ2', 'XYZCVBNMLK2', 'Company2', '2022-08-16', 12.4, 'Secured', 1200, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (3, 'ABCDEFGHIJ3', 'XYZCVBNMLK3', 'Company3', '2022-08-22', 11.2, 'Un-Secured', 800, 'Active');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (4, 'ABCDEFGHIJ4', 'XYZCVBNMLK4', 'Company4', '2022-08-30', 14.1, 'Secured', 700, 'Active');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (5, 'ABCDEFGHIJ5', 'XYZCVBNMLK5', 'Company5', '2022-08-01', 9.5, 'Un-Secured', 1300, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (6, 'ABCDEFGHIJ6', 'XYZCVBNMLK6', 'Company6', '2022-08-04', 8.7, 'Secured', 1250, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (7, 'ABCDEFGHIJ7', 'XYZCVBNMLK7', 'Company7', '2022-08-11', 15.7, 'Secured', 1380, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (8, 'ABCDEFGHIJ8', 'XYZCVBNMLK8', 'Company8', '2022-08-19', 13.5, 'Un-Secured', 1100, 'Active');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (9, 'ABCDEFGHIJ9', 'XYZCVBNMLK9', 'Company9', '2022-08-08', 11.6, 'Secured', 900, 'Active');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (10, 'ABCDEFGHI10', 'XYZCVBNML10', 'Company10', '2022-08-20', 10.8, 'Secured', 1500, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (11, 'ABCDEFGHI11', 'XYZCVBNML11', 'Company11', '2022-08-02', 12.6, 'Un-Secured', 1400, 'Matured');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (12, 'ABCDEFGHI12', 'XYZCVBNML12', 'Company12', '2022-08-27', 7.8, 'Secured', 1080, 'Active');
INSERT INTO security (id, isin, cusip, issuer, maturity_date, coupon, type, face_value, status) VALUES (13, 'ABCDEFGHI13', 'XYZCVBNML13', 'Company13', '2022-08-13', 13.5, 'Un-Secured', 1260, 'Active');

INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (1, 3, 2, 1, 2, 'Completed', 1000*2, True, '2022-02-01', '2022-09-01');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (2, 2, 1, 2, 3, 'Completed', 1200*3, True, '2022-02-05', '2022-09-05');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (3, 1, 3, 3, 1, 'Completed', 800*1, True, '2022-02-13', '2022-09-08');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (4, 4, 4, 4, 2, 'Completed', 700*2, True, '2022-02-03', '2022-09-18');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (5, 3, 2, 5, 2, 'Completed', 1300*2, True, '2022-02-05', '2022-09-15');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (6, 2, 1, 1, 3, 'Failed', 1000*3, True, '2022-02-03', '2022-09-20');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (7, 1, 3, 1, 2, 'Completed', 1000*2, True, '2022-02-04', '2022-09-17');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (8, 3, 2, 3, 4, 'Completed', 800*4, True, '2022-02-06', '2022-09-06');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (9, 2, 3, 3, 2, 'Completed', 800*2, True, '2022-02-03', '2022-09-19');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (10, 2, 4, 5, 2, 'Completed', 1300*2, True, '2022-02-01', '2022-09-09');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (11, 4, 1, 5, 1, 'Completed', 1300*1, True, '2022-02-03', '2022-09-18');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (12, 4, 2, 6, 2, 'Failed', 1250*2, True, '2022-02-02', '2022-09-11');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (13, 4, 3, 4, 5, 'Completed', 700*5, True, '2022-02-03', '2022-09-18');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (14, 1, 4, 3, 1, 'Completed', 800*1, True, '2022-02-05', '2022-09-18');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (15, 1, 3, 4, 3, 'Failed', 700*3, True, '2022-02-07', '2022-09-14');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (16, 2, 4, 2, 1, 'Completed', 1200*1, True, '2022-02-03', '2022-09-18');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (17, 2, 3, 1, 1, 'Completed', 1000*1, True, '2022-02-04', '2022-09-21');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (18, 2, 1, 7, 2, 'Completed', 1380*2, True, '2022-02-01', '2022-09-15');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (19, 2, 2, 7, 4, 'Failed', 1380*4, True, '2022-02-05', '2022-09-19');
INSERT INTO trade (id, book_id, counter_party_id, security_id, quantity, status, price, buy_sell, trade_date, settlement_date) VALUES (20, 2, 3, 6, 3, 'Completed', 1250*3, True, '2022-02-04', '2022-09-22');

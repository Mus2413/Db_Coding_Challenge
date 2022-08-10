DROP TABLE IF EXISTS trade;
DROP TABLE IF EXISTS book_user;
DROP TABLE IF EXISTS db_user;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS security;
DROP TABLE IF EXISTS counter_party;


CREATE TABLE db_user (
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    role VARCHAR(250) NOT NULL,
    username VARCHAR(250) NOT NULL, PRIMARY KEY (username),
    password VARCHAR(250) NOT NULL
);

CREATE TABLE book (
    id BIGINT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
    book_name VARCHAR(250) NOT NULL
);

CREATE TABLE book_user (
    username VARCHAR(250) NOT NULL, FOREIGN KEY (username) REFERENCES db_user(username),
    book_id BIGINT NOT NULL, FOREIGN KEY (book_id) REFERENCES book(id)
);

CREATE TABLE counter_party (
    id BIGINT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
    party_name VARCHAR(250) NOT NULL
);

CREATE TABLE security (
    id BIGINT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
    isin VARCHAR(12) NOT NULL, UNIQUE (isin),
    cusip VARCHAR(12) NOT NULL, UNIQUE (cusip),
    issuer VARCHAR(250) NOT NULL,
    maturity_date DATE NOT NULL,
    coupon FLOAT(2) NOT NULL,
    type VARCHAR(64) NOT NULL,
    face_value INT NOT NULL,
    status VARCHAR(20) NOT NULL
);

CREATE TABLE trade (
    id BIGINT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
    book_id BIGINT NOT NULL, FOREIGN KEY (book_id) REFERENCES book(id),
    counter_party_id BIGINT NOT NULL, FOREIGN KEY (counter_party_id) REFERENCES counter_party(id),
    security_id BIGINT NOT NULL, FOREIGN KEY (security_id) REFERENCES security(id),
    quantity INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    buy_sell BOOLEAN NOT NULL DEFAULT 0,
    trade_date DATE NOT NULL,
    settlement_date DATE
);

CREATE TABLE favourites (
    username VARCHAR(250) NOT NULL, FOREIGN KEY (username) REFERENCES db_user(username),
    security_id BIGINT NOT NULL, FOREIGN KEY (security_id) REFERENCES security(id)
);

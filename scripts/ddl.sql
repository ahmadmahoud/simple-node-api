CREATE TABLE bms.book (
	book_id serial4 NOT NULL,
	book_title varchar(300) NOT NULL,
	book_description varchar(1000) NULL,
	book_author varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	book_pages int4 NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);

CREATE TABLE bms.store (
	store_id serial4 NOT NULL,
	store_name varchar(100) NOT NULL,
	store_address varchar(200) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (store_id)
);
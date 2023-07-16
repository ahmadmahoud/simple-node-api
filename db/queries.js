exports.quaryList={

    GET_STORE_LIST_QUARY:"SELECT store_id, store_name, store_address, store_code, created_on, created_by FROM bms.store;",

    GET_STORE_CODE:"SELECT STORE_CODE FROM BMS.STORE WHERE STORE_CODE =$1;",

    GET_BOOK_ID:"SELECT  book_id  FROM BMS.book  WHERE book_id  =$1;",

    SAVE_STORE_QUERY:"INSERT INTO bms.store (store_name, store_address, store_code, created_on, created_by) VALUES($1, $2, $3, $4, $5);",

    UPDATE_STORE_QUARY:"UPDATE bms.store SET store_name=$1, store_address=$2, store_code=$3, created_on=$4, created_by=$5 WHERE store_id=$6;",
    
    DELETE_STORE_QUARY:"DELETE FROM bms.store WHERE store_id=$1;",
    
    GET_BOOK_LIST_QUARY:"SELECT book_id, book_title, book_descreption, book_publisher, book_author, book_pages, store_code, created_on, created_by FROM bms.book;",
   
    GET_BOOK_DETAILS_QUARY:"SELECT BOOK_ID, BOOK_TITLE, BOOK_DESCREPTION, BOOK_PUBLISHER, BOOK_AUTHOR, BOOK_PAGES, BOOK.STORE_CODE, STORE.STORE_NAME ,STORE.STORE_ADDRESS ,BOOK.CREATED_ON, BOOK.CREATED_BY FROM BMS.BOOK INNER JOIN BMS.STORE ON BOOK.STORE_CODE  = STORE.STORE_CODE WHERE BOOK_ID =$1;",
   
    SAVE_BOOK_QUARY:"INSERT INTO bms.book (book_title, book_descreption, book_publisher, book_author, book_pages, store_code, created_on, created_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8);",
    
    UPDATE_BOOK_QUARY:"UPDATE BMS.BOOK SET BOOK_TITLE=$1, BOOK_DESCREPTION=$2, BOOK_PUBLISHER=$3, BOOK_AUTHOR=$4, BOOK_PAGES=$5, STORE_CODE=$6, CREATED_ON=$7, CREATED_BY=$8 WHERE BOOK_ID=$9; ",
    
    DELETE_BOOK_QUARY:"DELETE FROM bms.book WHERE book_id=$1;"


}

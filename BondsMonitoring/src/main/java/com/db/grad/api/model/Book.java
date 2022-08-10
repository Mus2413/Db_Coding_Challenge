package com.db.grad.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {
	
	@Id
	@Column(name = "id" ) private long id;
	@Column(name = "book_name") private String bookName;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
        this.id = id;
    }
	public String getName() {
        return bookName;
    }

    public void setName(String book_name) {
        this.bookName = book_name;
    }
    
	

}

package com.db.grad.api.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "book_user")
public class BookUser {
	@Id
	@Column(name = "book_id") private long bookID;
	@Column(name = "username") private String username;
	
}

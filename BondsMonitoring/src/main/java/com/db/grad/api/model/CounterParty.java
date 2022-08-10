package com.db.grad.api.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "counter_party")
public class CounterParty {

	@Id
	@Column(name = "id" ) private long id;
	@Column(name = "name") private String name;
}

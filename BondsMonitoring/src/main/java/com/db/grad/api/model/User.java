package com.db.grad.api.model;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@SuperBuilder
@Table(name = "db_user")
public class User {
    public User () {

    }
    @Column(name = "name") private String name;
    @Column(name = "email") private String email;
    @Column(name = "role") private String role;
    @Id
    @Column(name = "username") private String username;
    @Column(name = "password") private String password;

    public boolean equals(Object o) {
        User u = (User) o;
        return this.getUsername().equals(u.getUsername());
    }
}

package com.db.grad.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.db.grad.api.model.BookUser;

import java.util.List;

@Repository
public interface BookUserRepository extends JpaRepository<BookUser, Long>{
	@Query(value = "Select * from book_user where username = :username", nativeQuery = true)
    List<BookUser> findByUsername(String username);
}

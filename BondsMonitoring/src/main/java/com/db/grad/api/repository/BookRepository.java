package com.db.grad.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.grad.api.model.Book;

@Repository 
public interface BookRepository extends JpaRepository<Book , Long> {
	@Query(value= "select b from book b where b.id in ( select bu.book_id from book_user bu where bu.username = :username)) ", nativeQuery=true)
	Book findByUsername(String username);
}


package com.db.grad.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.db.grad.api.model.CounterParty;

@Repository 
public interface CounterpartyRepository extends JpaRepository<CounterParty , Long> {
	
}

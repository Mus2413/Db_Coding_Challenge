package com.db.grad.api.repository;

import com.db.grad.api.model.Security;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Long> {
	@Query(value = "select s from security s where s.id in (select t.security_id from trade t where t.id = :trade_id", nativeQuery = true)
	Security findByTradeId(long trade_id);
}

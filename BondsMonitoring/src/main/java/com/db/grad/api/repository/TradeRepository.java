package com.db.grad.api.repository;

import java.util.List;

import com.db.grad.api.responses.TradeResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.db.grad.api.model.Security;
import com.db.grad.api.model.Trade;

@Repository
public interface TradeRepository extends JpaRepository<Trade,Long> {
	String SELECT_FIELDS = "select " +
			"t.id as id, " +
			"b.id as bookId, " +
			"b.book_name as bookName, " +
			"c.id as counterPartyId, " +
			"c.party_name as counterPartyName, " +
			"s.isin as securityIsin, " +
			"s.cusip as securityCusip, " +
			"s.issuer as securityIssuer," +
			"t.quantity as quantity, " +
			"t.status as status, " +
			"t.price as price, " +
			"t.buy_sell as buySell, " +
			"t.trade_date as tradeDate, " +
			"t.settlement_date as settlementDate " +
			"from trade t " +
			"inner join book b on b.id = t.book_id " +
			"inner join security s on s.id = t.security_id " +
			"inner join counter_party c on c.id = t.counter_party_id";

	@Query(value = SELECT_FIELDS + " where t.id = :id", nativeQuery = true)
    TradeResponse findById(long id);

	@Query(value = SELECT_FIELDS + " where t.security_id = :securityId", nativeQuery = true)
	List<TradeResponse> findBySecurityId(long securityId);

	@Query(value = SELECT_FIELDS + " where c.id = :id", nativeQuery = true)
	List<TradeResponse> findByCounterPartyId(long id);

	@Query(value= "select s from security s where s.id in (Select t.security_id from trade t where t.id = :trade_id)) ", nativeQuery=true)
	Security findSecurityByTradeID(long trade_id);

	@Query(value = SELECT_FIELDS +" where b.id = :book_id", nativeQuery = true)
	List<TradeResponse> getTradeByBookId(long book_id);

	@Query(value = SELECT_FIELDS, nativeQuery = true)
	List<TradeResponse> getAllTrades();
}


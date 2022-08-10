package com.db.grad.api.service;

import java.util.*;

import com.db.grad.api.Exception.ResourceNotFoundException;
import com.db.grad.api.model.BookUser;
import com.db.grad.api.repository.*;
import com.db.grad.api.responses.TradeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.db.grad.api.model.Security;
import com.db.grad.api.model.Trade;
import com.db.grad.api.requests.TradeRequest;

@Service
public class TradeService {
	private TradeRepository tradeRepository;
	private SecurityRepository securityRepository;
	private BookUserRepository bookUserRepository;
	private CounterpartyRepository counterpartyRepository;
	private BookRepository bookRepository;

	@Autowired
    public TradeService(TradeRepository tradeRepository, SecurityRepository securityRepository,
    BookUserRepository bookUserRepository, BookRepository bookRepository, CounterpartyRepository counterpartyRepository) {
        this.tradeRepository = tradeRepository;
        this.securityRepository=securityRepository;
        this.bookUserRepository=bookUserRepository;
        this.bookRepository=bookRepository;
        this.counterpartyRepository=counterpartyRepository;
    }

    public List<TradeResponse> getAllTrades() {
        List<TradeResponse> trade = tradeRepository.getAllTrades();
        if (trade==null) {
            return new ArrayList<>();
        }
        return trade;
    }

	public TradeResponse getTradeById(long id) {
        TradeResponse trade = tradeRepository.findById(id);
        if (trade==null) {
            throw new ResourceNotFoundException("No trade found with the given ID");
        }
        return trade;
    }

	public Security getSecurityByTradeID(long tradeId){
		Security security=tradeRepository.findSecurityByTradeID(tradeId);
		return security;
	}

	public Trade createTrade(TradeRequest tradeRequest) {
        Trade trade = Trade.builder().
                bookId(tradeRequest.getBookId())
                .counterPartyId(tradeRequest.getCounterPartyId())
                .securityId(tradeRequest.getSecurityId())
                .quantity(tradeRequest.getQuantity())
                .status(tradeRequest.getStatus())
                .price(tradeRequest.getPrice())
                .buySell(tradeRequest.getBuySell())
                .tradeDate(tradeRequest.getTradeDate())
                .settlementDate(tradeRequest.getSettlementDate())
                .build();

        trade = tradeRepository.saveAndFlush(trade);
        return trade;
    }

    public Trade updateTrade(long id, TradeRequest updateTradeRequest) {
        TradeResponse tradeFromDb = tradeRepository.findById(id);
        if (tradeFromDb==null) {
            throw new ResourceNotFoundException("No trade found with the given ID");
        }
        Trade trade = Trade.builder()
                .id(id)
                .bookId(updateTradeRequest.getBookId())
                .counterPartyId(updateTradeRequest.getCounterPartyId())
                .securityId(updateTradeRequest.getSecurityId())
                .quantity(updateTradeRequest.getQuantity())
                .status(updateTradeRequest.getStatus())
                .price(updateTradeRequest.getPrice())
                .buySell(updateTradeRequest.getBuySell())
                .tradeDate(updateTradeRequest.getTradeDate())
                .settlementDate(updateTradeRequest.getSettlementDate())
                .build();

        trade = tradeRepository.saveAndFlush(trade);
        return trade;
    }

    public List<TradeResponse> getTradeBySecurityId(long securityId) {
        List<TradeResponse> trade = tradeRepository.findBySecurityId(securityId);
        if (trade==null) {
            new ArrayList<>();
        }
        return trade;
    }

    public List<TradeResponse> getTradeByCounterpartyId(long counterpartyId) {
        List<TradeResponse> trade = tradeRepository.findByCounterPartyId(counterpartyId);
        if (trade==null) {
            throw new ResourceNotFoundException("No trade found with the given CounterpartyID");
        }
        return trade;
    }

    public boolean deleteTradeById(long id) {
        tradeRepository.deleteById(id);
        return true;
    }

    public List<TradeResponse> getTradeByUserName(String username) {
        List<BookUser> bookUsers=bookUserRepository.findByUsername(username);
        List<Trade> trades = new ArrayList<Trade>();
        List<TradeResponse> tradeResponseList=new ArrayList<>();
        for(BookUser b: bookUsers) {
            List<TradeResponse> trade = tradeRepository.getTradeByBookId(b.getBookID());
           tradeResponseList.addAll(trade);
        }
        return tradeResponseList;
    }
}

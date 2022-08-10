package com.db.grad.api.responses;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;

public interface TradeResponse {
    @JsonProperty("trade_id") long getId();

    @JsonProperty("book_id") long getBookId();
    @JsonProperty("book_name") String getBookName();

    @JsonProperty("counter_party_id") long getCounterPartyId();
    @JsonProperty("counter_party_name") String getCounterPartyName();

    @JsonProperty("security_isin") String getSecurityIsin();
    @JsonProperty("security_cusip") String getSecurityCusip();
    @JsonProperty("security_issuer") String getSecurityIssuer();

    @JsonProperty("quantity") int getQuantity();
    @JsonProperty("status") String getStatus();
    @JsonProperty("price") int getPrice();
    @JsonProperty("buy_sell") boolean getBuySell();
    @JsonProperty("trade_date") Date getTradeDate();
    @JsonProperty("settlement_date") Date getSettlementDate();
}
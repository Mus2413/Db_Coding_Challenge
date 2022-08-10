package com.db.grad.api.requests;

import java.io.Serializable;
import java.sql.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TradeRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty("book_id")
    @NotNull
    private long bookId;

    @JsonProperty("counter_party_id")
    @NotNull
    private long counterPartyId;
    
    @JsonProperty("security_id")
    @NotNull
    private long securityId;
    
    @JsonProperty("quantity")
    @NotNull
    private int quantity;
    
    @JsonProperty("status")
    @NotBlank
    private String status;
    
    @JsonProperty("price")
    @NotNull
    private int price;
    
    @JsonProperty("buy_sell")
    @NotBlank
    private String buySell;
    
    @JsonProperty("trade_date")
    @NotNull
    private Date tradeDate;
    
    @JsonProperty("settlement_date")
    @NotNull
    private Date settlementDate;

}
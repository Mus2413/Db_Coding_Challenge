package com.db.grad.api.responses;

import java.io.Serializable;
import java.sql.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResCreateTrade implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @JsonProperty("quantity")
    private int quantity;
    
    @JsonProperty("status")
    private String status;
    
    @JsonProperty("price")
    private int price;
    
    @JsonProperty("buy_sell")
    private String buySell;
    
    @JsonProperty("trade_date")
    @NotNull
    private Date tradeDate;
    
    @JsonProperty("settlement_date")
    @NotNull
    private Date settlementDate;

}
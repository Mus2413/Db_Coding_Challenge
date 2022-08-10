package com.db.grad.api.model;

import java.sql.Date;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "trade")
@SuperBuilder
@NoArgsConstructor
@Data
public class Trade {
    @Id
    @GenericGenerator(name="custom_gen", strategy = "com.db.grad.api.idgenerator.CustomIDGenerator",
            parameters = @org.hibernate.annotations.Parameter(
                    name = "tableName",
                    value = "trade")
    )
    @GeneratedValue(generator = "custom_gen")
    private Long id;
    @Column(name = "security_id", nullable = false) private long securityId;
    @Column(name = "book_id", nullable = false) private long bookId;
    @Column(name = "counter_party_id", nullable = false) private long counterPartyId;
    @Column(name = "quantity", nullable = false) private int quantity;
    @Column(name = "status", nullable = false) private String status;
    @Column(name = "price") private int price;
    @Column(name = "buy_sell") private String buySell;
    @Column(name = "trade_date") private Date tradeDate;
    @Column(name = "settlement_date") private Date settlementDate;
}

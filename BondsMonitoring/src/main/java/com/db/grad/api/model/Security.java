package com.db.grad.api.model;

import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.*;

@Entity
@SuperBuilder
@Data
@Table(name = "security")
public class Security {
    public Security() {
    }

    @Id
    @GenericGenerator(name="custom_gen", strategy = "com.db.grad.api.idgenerator.CustomIDGenerator",
            parameters = @org.hibernate.annotations.Parameter(
                    name = "tableName",
                    value = "security")
    )
    @GeneratedValue(generator = "custom_gen")
    private Long id;
    @Column(name = "isin", nullable = false) private String isin;
    @Column(name = "cusip", nullable = false) private String cusip;
    @Column(name = "issuer", nullable = false) private String issuer;
    @Column(name = "maturity_date", nullable = false) private Date maturityDate;
    @Column(name = "coupon") private float coupon;
    @Column(name = "type") private String type;
    @Column(name = "face_value") private int faceValue;
    @Column(name = "status") private String status;
}


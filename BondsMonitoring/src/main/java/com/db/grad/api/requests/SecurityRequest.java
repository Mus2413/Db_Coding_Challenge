package com.db.grad.api.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SecurityRequest {
    @JsonProperty("isin") @NotBlank private String isin;
    @JsonProperty("cusip") @NotBlank private String cusip;
    @JsonProperty("issuer") @NotBlank private String issuer;
    @JsonProperty("maturity_date") @NotNull private Date maturityDate;
    @JsonProperty("coupon") @NotNull private float coupon;
    @JsonProperty("type") @NotBlank private String type;
    @JsonProperty("face_value") @NotNull private int faceValue;
    @JsonProperty("status") @NotBlank private String status;
}

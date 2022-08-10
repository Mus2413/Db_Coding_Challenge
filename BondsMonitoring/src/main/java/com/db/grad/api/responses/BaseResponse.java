package com.db.grad.api.responses;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BaseResponse<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("message")
    public String message;

    @JsonProperty("data")
    public T data;

}

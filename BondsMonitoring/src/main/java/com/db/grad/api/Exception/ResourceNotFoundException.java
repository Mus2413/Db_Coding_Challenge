package com.db.grad.api.Exception;

public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String errMsg) {
        super(errMsg);
    }

}

package com.db.grad.api.service;

import com.db.grad.api.model.Security;
import com.db.grad.api.repository.SecurityRepository;
import com.db.grad.api.requests.SecurityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SecurityService {

    SecurityRepository securityRepository;
    @Autowired
    public SecurityService(SecurityRepository securityRepository) {
        this.securityRepository = securityRepository;
    }
    public Security getSecurityById(long id) {
        Optional<Security> security = securityRepository.findById(id);
        return security.orElse(null);
    }

    public List<Security> getAllSecurities(){
    	List<Security> security=securityRepository.findAll();
    	return security != null? security : new ArrayList<>();
    }

    public Security getSecurityByTradeId(int trade_id) {
        return securityRepository.findByTradeId(trade_id);
    }

    public Security updateSecurity(long id, SecurityRequest securityRequest) {
        Security security = Security.builder()
                .faceValue(securityRequest.getFaceValue())
                .status(securityRequest.getStatus())
                .cusip(securityRequest.getCusip())
                .coupon(securityRequest.getCoupon())
                .issuer(securityRequest.getIssuer())
                .maturityDate(securityRequest.getMaturityDate())
                .type(securityRequest.getType())
                .isin(securityRequest.getIsin())
                .id(id)
                .build();
        return securityRepository.saveAndFlush(security);
    }

    public Security addSecurity(SecurityRequest securityRequest) {
        Security security = Security.builder()
                .faceValue(securityRequest.getFaceValue())
                .status(securityRequest.getStatus())
                .cusip(securityRequest.getCusip())
                .coupon(securityRequest.getCoupon())
                .issuer(securityRequest.getIssuer())
                .maturityDate(securityRequest.getMaturityDate())
                .type(securityRequest.getType())
                .isin(securityRequest.getIsin())
                .build();

        return securityRepository.saveAndFlush(security);
    }

    public boolean deleteSecurityById(long id) {
        securityRepository.deleteById(id);
        return true;
    }

}

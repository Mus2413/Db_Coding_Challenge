package com.db.grad.api.controller;

import com.db.grad.api.model.Security;
import com.db.grad.api.model.User;
import com.db.grad.api.requests.SecurityRequest;
import com.db.grad.api.responses.TradeResponse;
import com.db.grad.api.service.SecurityService;
import com.db.grad.api.service.TradeService;
import com.db.grad.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/securities/")
public class SecurityController {
    SecurityService securityService;
    TradeService tradeService;
    UserService userService;

    @Autowired
    public SecurityController(SecurityService securityService, TradeService tradeService, UserService userService) {
        this.securityService = securityService;
        this.tradeService = tradeService;
        this.userService = userService;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("")
    public List<Security> getAllSecurities() {
        return securityService.getAllSecurities();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    public Security getSecurityById(long id) {
        return securityService.getSecurityById(id);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("")
    public Security addSecurity(@RequestBody SecurityRequest securityRequest) {
        return securityService.addSecurity(securityRequest);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("{id}")
    public Security updateSecurity(long id, @RequestBody SecurityRequest securityRequest) {
         return securityService.updateSecurity(id, securityRequest);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("{id}")
    public boolean deleteSecurity(long id) {
        return securityService.deleteSecurityById(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("{securityId}/trade/")
    public List<TradeResponse> getTradesBySecurityId(@PathVariable(value="securityId") long securityId) {
        return tradeService.getTradeBySecurityId(securityId);
    }

    void verifyAdmin(HttpServletRequest request) {
        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        if (!requestingUser.getRole().equals("ADMIN")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authorised");
        }
    }

}

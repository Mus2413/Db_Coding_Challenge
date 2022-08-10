package com.db.grad.api.controller;

import com.db.grad.api.model.Security;
import com.db.grad.api.model.Trade;
import com.db.grad.api.model.User;
import com.db.grad.api.requests.TradeRequest;
import com.db.grad.api.responses.TradeResponse;
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
@RequestMapping(value = "/trade/")
public class TradeController {

    private final TradeService tradeService;
    private final UserService userService;

    @Autowired
    public TradeController(TradeService tradeService, UserService userService) {
        this.tradeService = tradeService;
        this.userService = userService;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("")
    public List<TradeResponse> getAllTrades(HttpServletRequest request) {
        try {
            verifyAdmin(request);
            return tradeService.getAllTrades();
        } catch (ResponseStatusException e) {
            User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
            return tradeService.getTradeByUserName(requestingUser.getUsername());
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("{id}/")
    public TradeResponse getTradeById(HttpServletRequest request, @PathVariable(value="id") long id) {
        verifyAdmin(request);
        return tradeService.getTradeById(id);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("create/")
    public Trade addTrade(HttpServletRequest request, @RequestBody TradeRequest tradeRequest) {
        return tradeService.createTrade(tradeRequest);
    }
//TODO: not tested

    @CrossOrigin(origins = "*")
    @PutMapping("{id}/")
    public Trade updateTrade(HttpServletRequest request,
                             @PathVariable(value="id") long id,
                             @RequestBody TradeRequest updateTradeRequest) {
        return tradeService.updateTrade(id, updateTradeRequest);
    }

//    TODO: error here
    @CrossOrigin(origins = "*")
    @GetMapping("{tradeId}/security/")
    public Security getSecurityByTradeId(@PathVariable(value="tradeId") long tradeId){
        return tradeService.getSecurityByTradeID(tradeId);
    }

    void verifyAdmin(HttpServletRequest request) {
        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        if (!requestingUser.getRole().equals("ADMIN")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authorised");
        }
    }
}
package com.db.grad.api.controller;

import com.db.grad.api.model.User;
import com.db.grad.api.service.UserService;
import com.db.grad.api.tokenauth.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/")
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserService userService;
    @CrossOrigin(origins = "*")
    @PostMapping("login/")
    public Map<String, Object> login(@RequestBody LoginDetails loginDetails) {
        String username = loginDetails.getUsername();
        String password = loginDetails.getPassword();
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                username,
                password
        );
        try{
            authentication = authenticationManager.authenticate(authentication);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (authentication.isAuthenticated()) {
            String token = jwtUtil.generateToken(username);
            Map<String, Object> response = new HashMap<>();
            User user = userService.getUserByUsername(username);
            user.setPassword("");
            response.put("token", token);
            response.put("user", user);
            return response;
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username/password");
    }
}

class LoginDetails {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

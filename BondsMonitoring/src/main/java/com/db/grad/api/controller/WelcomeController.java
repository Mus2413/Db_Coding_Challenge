package com.db.grad.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/")
public class WelcomeController {

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public String getWelcome() {
        return "Project is running!";
    }
}

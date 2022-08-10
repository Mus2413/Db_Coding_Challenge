package com.db.grad.api.service;

import com.db.grad.api.model.User;
import com.db.grad.api.repository.UserRepository;
import com.db.grad.api.tokenauth.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtil jwtUtil;
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users == null) {
            return new ArrayList<>();
        }
        return users;
    }

    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user;
    }

    public User addOrUpdateUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User getUserByToken(String token) {
        String username = jwtUtil.extractUsername(token);
        return this.getUserByUsername(username);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

}

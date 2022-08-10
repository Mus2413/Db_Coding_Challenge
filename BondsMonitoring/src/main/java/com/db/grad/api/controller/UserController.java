package com.db.grad.api.controller;

import com.db.grad.api.model.User;
import com.db.grad.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users/")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin(origins = "*")
    @GetMapping("")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("")
    public User addUser(HttpServletRequest request, @RequestBody Map<String, String> body) {
        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        if (!requestingUser.getRole().equals("ADMIN")) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Not authorized to create user");
        }
        User user = User.builder()
                        .email(body.get("email"))
                        .username(body.get("username"))
                        .name(body.get("name"))
                        .role(body.get("role"))
                        .password(body.get("password"))
                        .build();

        return userService.addOrUpdateUser(user);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("{username}/")
    public User updateUser(HttpServletRequest request,
                           @RequestBody Map<String, String> body,
                           @PathVariable(value="username") String username) {

        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        User user = userService.getUserByUsername(username);

        user.setEmail(body.get("email"));
        user.setPassword(body.get("password"));
        user.setRole(body.get("role"));
        user.setName(body.get("name"));

        if (!requestingUser.equals(user))
            return requestingUser;
        return userService.addOrUpdateUser(user);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("{username}/")
    public boolean deleteUser(HttpServletRequest request,
                           @RequestBody Map<String, String> body,
                           @PathVariable(value="username") String username) {

        User requestingUser = userService.getUserByToken((String) request.getAttribute("token"));
        User user = userService.getUserByUsername(username);

        if (!requestingUser.equals(user) & !requestingUser.getRole().equals("ADMIN"))
            return false;
        userService.deleteUser(user);
        return true;
    }
}

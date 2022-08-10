package com.db.grad.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class JavaApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(JavaApiApplication.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/securities/").allowedOrigins("http://localhost:8080", "https://dbfrontend-dot-db-grads-v6wg-group-12.nw.r.appspot.com/");
            }
        };
    }
}

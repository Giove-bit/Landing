package com.example.demo.controller;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
@Slf4j
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> creds) {
        if ("user".equals(creds.get("username")) && "pass".equals(creds.get("password"))) {
            log.info("Login OK");
            return Map.of("token", "dummy-jwt-token");

        }
        throw new RuntimeException("Invalid credentials");
    }
}
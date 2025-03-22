package com.example.demo.controller;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> creds) {
        if ("user".equals(creds.get("username")) && "pass".equals(creds.get("password"))) {
            return Map.of("token", "dummy-jwt-token");
        }
        throw new RuntimeException("Invalid credentials");
    }
}
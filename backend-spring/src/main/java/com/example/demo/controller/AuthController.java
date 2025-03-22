package com.example.demo.controller;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
@Slf4j
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestHeader("X-Correlation-ID") String correlationId, @RequestBody Map<String, String> creds) {
        MDC.put("sid", correlationId);
        if ("user".equals(creds.get("username")) && "pass".equals(creds.get("password"))) {
            Map<String, String> res = Map.of("token", "dummy-jwt-token");
            log.info("Request: {} - Response: {}", creds, res);
            log.info("Login OK");
            MDC.clear();
            return ResponseEntity.ok(res);

        }
        throw new RuntimeException("Invalid credentials");
    }
}
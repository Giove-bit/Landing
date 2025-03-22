package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/test")
@Slf4j
public class TestController {


    @PostMapping("/posta")
    public ResponseEntity<?> login(@RequestHeader("X-Correlation-ID") String correlationId, @RequestBody Map<String, String> req) {
        MDC.put("sid", correlationId);
        if ("giove".equals(req.get("user"))) {
            Map<String, String> res = Map.of("id", "12345");
            log.info("Request: {} - Response: {}", req, res);
            MDC.clear();
            return ResponseEntity.ok(res);

        }
        throw new RuntimeException("Error");
    }
}

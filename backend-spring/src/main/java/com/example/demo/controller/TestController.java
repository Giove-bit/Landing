package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/test")
@Slf4j
public class TestController {

    @PostMapping("/posta")
    public Map<String, String> login(@RequestBody Map<String, String> creds) {
        if ("giove".equals(creds.get("user"))) {
            log.info("OK");
            return Map.of("id", "12345");

        }
        throw new RuntimeException("Error");
    }
}

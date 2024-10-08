package com.coco.weather.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String test(){
        System.out.println("컨12321");
        return "데이터123";
    }
}

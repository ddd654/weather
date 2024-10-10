package com.coco.weather.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String test() {
        System.out.println("컨12312312321");
        return "데이터123";
    }
}








































//class Solution {
//    public static void main(String[] args) {
//        System.out.println(Arrays.deepToString(solution(new int[]{1, 2, 3, 4, 5, 6, 7, 8}, 2)));
//    }
//
//    public static int[][] solution(int[] num_list, int n) {
//
//        int row = (num_list.length + n - 1) / n;
//        int[][] answer = new int[row][n];
//
//        for (int i = 0; i < row; i++) {
//            for (int j = 0; j < n; j++) {
//                answer[i][j] = num_list[i * n + j];
//            }
//        }
//
//        return answer;
//    }
//}

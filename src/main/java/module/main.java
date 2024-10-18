package module;

public class main {
    public static void main(String[] args) {
        Calculator cal = new Calculator();
        cal.sumAll();
        System.out.println(cal.sumAll(12, 2, 3, 4, 5, 5));

        cal.sumAll(2, 3);



    }
}



















//class Solution {
//    public int[][] solution(int[] num_list, int n) {
//        int[] num_list = {1, 2, 3, 4, 5, 6};
//        int n = 2;
//        int[][] answer = new int[(num_list.length + n) / 2][n];
//
//        for (int i = 0; i < num_list.length; i++) {
//            //나누는 동안 00, 11, 22
//            answer[i / n][i % n] = num_list[i];
//        }
//
//        return answer;
//    }
//}



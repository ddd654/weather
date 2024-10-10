package module;

public class Calculator {

    // 1. 더하기를 누르면 수를 계산할 수 있다
    // 2.
    double sumAll(double... values) {
        double total = 0;
        for (int i = 0; i < values.length; i++) {
            total += values[i];
        }
        return total;
    }

    //
    double minus(double... values) {
        double total = 0;
        for (int i = 0; i < values.length; i++) {
            total -= values[i];
        }
        return total;
    }

    //
    double multiply(double ... value12){
        double total = 1;
        for(int i = 0; i < value12.length; i++){
            total *= value12[i];
        }
        return total;
    }

    //
    double divide(double ... value){
        double total = 0;
        for(int i = 0; i < value.length; i++){
            total /= value[i];
        }
        return total;
    }










}


package mathrandom;

import java.util.Scanner;


public class MathRandom {

   
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        
        int randomAsciiValue = (int) (Math.random() * (90 - 65 + 1)) + 65;
        
        System.out.println("randomly ascii value is "+randomAsciiValue);
    }
    
}

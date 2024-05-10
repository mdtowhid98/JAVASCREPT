
package lettergrade;

import java.util.Scanner;


public class LetterGrade {

   
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("enter the letter a or b or c or d or f");
        char letterNumber=input.next().toLowerCase().charAt(0);
       String numberValue="";
        
        switch (letterNumber) {
            case 'a':
                numberValue="0";
                break;
                case 'b':
                numberValue="1";
                
                break;
                 case 'c':
                numberValue="2";
                break;
                 case 'd':
                numberValue="3";
                break;
                 case 'e':
                numberValue="4";
                break;
                 case 'f':
                numberValue="5";
                break;
            default:
                System.out.println("invalid number");
        }
        System.out.println("the letter number is "+numberValue);
    }
    
}

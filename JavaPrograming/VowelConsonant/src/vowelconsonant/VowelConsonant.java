
package vowelconsonant;

import java.util.Scanner;


public class VowelConsonant {

   
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter your charecter");
        char letter=input.next().toLowerCase().charAt(0);
        if(letter>='a' && letter<='z' || letter>='A' && letter<='Z'){
        if(letter=='a' || letter=='e'|| letter=='i'||letter=='o' || letter=='u'){
            System.out.println(letter+" is a vowel");
        }
        else{
            System.out.println(letter+" is a consonant");
        }
        
        }
        else{
        
        }
        
    }
    
}

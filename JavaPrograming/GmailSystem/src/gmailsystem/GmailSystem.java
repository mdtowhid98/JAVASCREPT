
package gmailsystem;

import java.util.Scanner;


public class GmailSystem {

    
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter your user name");
        String userName=input.next();
        
        String message=String.format("Wellcome to %s Gmail", userName);
        
        if(userName.equalsIgnoreCase("Towhid")){
            System.out.println("Enter your password");
            
            
        String password=input.next();
        
        if(password.equals("Towhid1425")){
            System.out.println(message);
        }
        
        
        }
        
        else{
            System.out.println("Invalid account");
        }
        
        
        
        
        
    }
    
}

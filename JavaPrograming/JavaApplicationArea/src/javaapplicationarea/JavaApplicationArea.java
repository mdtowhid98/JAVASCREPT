/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplicationarea;

import java.util.Scanner;

/**
 *
 * @author Admin
 */
public class JavaApplicationArea {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("enter number1");
        double number1=input.nextDouble();
        
           System.out.println("enter number2");
        double number2=input.nextDouble();
        
          System.out.println("enter number3");
        double number3=input.nextDouble();
        
          System.out.println("enter number4");
        double number4=input.nextDouble();
        double sum=(number1*number2)+number3-number4;
        System.out.println(sum);
    }
    
}

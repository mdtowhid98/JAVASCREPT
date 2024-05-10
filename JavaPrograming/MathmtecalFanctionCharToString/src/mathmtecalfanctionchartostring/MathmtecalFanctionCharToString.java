package mathmtecalfanctionchartostring;

import java.util.Scanner;

public class MathmtecalFanctionCharToString {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter your letter");
        int letter = input.nextInt();
//        String grade="";
//        
//        switch (letter) {
//            case 1:
//                grade="a,b,c";
//                break;
//               case 2:
//                grade = "d,e,f";
//                break;
//case 3:
//                grade = "g,h,i";
//                break;
//                case 4:
//                grade = "j,k,l";
//                break;
//            default:
//                grade="Invalid grade";
//        }
//        
//        System.out.println(grade); 

        if (letter == 1) {
            System.out.println("press 1=a,press \2=b,press 3=c,");
            int towhid = input.nextInt();
            if (towhid == 1) {
                System.out.println("a");
            } else if (towhid == 2) {
                System.out.println("b");
            } else if (towhid == 3) {
                System.out.println("c");
            } 
        } 
      
         if (letter==2) {
                System.out.println("prees 1=d,prees 1=e,prees 1=f");
 int kutub=input.nextInt();
                 if (kutub==1) {
                    System.out.println("d");
                } else if (kutub == 2) {
                    System.out.println("e");
                } else if (kutub == 3) {
                    System.out.println("f");
                }
            }
         
            if (letter==3) {
                System.out.println("prees 1=g,prees 1=h,prees 1=i");
 int raju=input.nextInt();
                 if (raju==1) {
                    System.out.println("g");
                } else if (raju == 2) {
                    System.out.println("h");
                } else if (raju == 3) {
                    System.out.println("i");
                }
            }
         
        
        else {
            System.out.println("invalid input");
        }

    }

}

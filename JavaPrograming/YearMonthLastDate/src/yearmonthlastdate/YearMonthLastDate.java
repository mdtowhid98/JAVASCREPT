
package yearmonthlastdate;

import java.util.Scanner;

/**
 *
 * @author Admin
 */
public class YearMonthLastDate {

    
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter your year");
        int year=input.nextInt();
        System.out.println("Enter month first three digit in uppercase");
        String month=input.next().toUpperCase();
        
        int lastDay;
        switch (month) {
            case "JAN":
            case "MAR":
            case "MAY":
            case "JUL":
            case "AUG":
            case "OCT":
            case "DEC":
                lastDay=31;
                break;
                case "APR":
                case "JUN":
                case "SEP":
                case "NOV":
                    lastDay=30;
                    break;
                    case "FEB":
                       if((year%4==0 && year%100 !=0)||year%400==0){
                       lastDay=29;
                       }
                       else{
                       lastDay=28;
                       }
                        break;
            default:
                throw new AssertionError();
        }
        System.out.println("year "+year+" of month "+month+" is "+lastDay);
    }
    
}

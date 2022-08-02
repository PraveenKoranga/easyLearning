export const ExcerSize = [
  {
    name: "Python",
    questions: [
      {
        Exercise: "Calculate the multiplication and sum of two numbers",
        solution: `def multiplication_or_sum(num1, num2):
          # calculate product of two number
          product = num1 * num2
          # check if product is less then 1000
          if product <= 1000:
              return product
          else:
              # product is greater than 1000 calculate sum
              return num1 + num2
      
      # first condition
      result = multiplication_or_sum(20, 30)
      print("The result is", result)
      
      # Second condition
      result = multiplication_or_sum(40, 30)
      print("The result is", result)`,
      },
      {
        Exercise: "Print the sum of the current number and the previous number",
        solution: `print("Printing current and previous number and their sum in a range(10)")
          previous_num = 0
          
          # loop from 1 to 10
          for i in range(1, 11):
              x_sum = previous_num + i
              print("Current Number", i, "Previous Number ", previous_num, " Sum: ", previous_num + i)
              # modify previous number
              # set it to the current number
              previous_num = i`,
      },
      {
        Exercise:
          "Print characters from a string that are present at an even index number",
        solution: `# accept input string from a user
          word = input('Enter word ')
          print("Original String:", word)
          
          # get the length of a string
          size = len(word)
          
          # iterate a each character of a string
          # start: 0 to start with first character
          # stop: size-1 because index starts with 0
          # step: 2 to get the characters present at even index like 0, 2, 4
          print("Printing only even index chars")
          for i in range(0, size - 1, 2):
              print("index[", i, "]", word[i])`,
      },
      {
        Exercise: "Remove first n characters from a string",
        solution: `def remove_chars(word, n):
      print('Original string:', word)
      x = word[n:]
      return x
  
  print("Removing characters from a string")
  print(remove_chars("pynative", 4))
  print(remove_chars("pynative", 2))
  `,
      },
      {
        Exercise: "Check if the first and last number of a list is the same",
        solution: `def first_last_same(numberList):
        print("Given list:", numberList)
        
        first_num = numberList[0]
        last_num = numberList[-1]
        
        if first_num == last_num:
            return True
        else:
            return False
    
    numbers_x = [10, 20, 30, 40, 10]
    print("result is", first_last_same(numbers_x))
    
    numbers_y = [75, 65, 35, 75, 30]
    print("result is", first_last_same(numbers_y))
    `,
      },
      {
        Exercise: "Display numbers divisible by 5 from a list",
        solution: `num_list = [10, 20, 33, 46, 55]
      print("Given list:", num_list)
      print('Divisible by 5:')
      for num in num_list:
          if num % 5 == 0:
              print(num)
      `,
      },
      {
        Exercise: "Return the count of a given substring from a string",
        solution: `str_x = "Emma is good developer. Emma is a writer"
        # use count method of a str class
        cnt = str_x.count("Emma")
        print(cnt)
        `,
      },
      {
        Exercise: "Print the following pattern",
        solution: `for num in range(10):
      for i in range(num):
          print (num, end=" ") #print number
      # new line after each row to display pattern correctly
      print("\n")`,
      },
      {
        Exercise: "Check Palindrome Number",
        solution: `def palindrome(number):
      print("original number", number)
      original_num = number
      
      # reverse the given number
      reverse_num = 0
      while number > 0:
          reminder = number % 10
          reverse_num = (reverse_num * 10) + reminder
          number = number // 10
  
      # check numbers
      if original_num == reverse_num:
          print("Given number palindrome")
      else:
          print("Given number is not palindrome")
  
  palindrome(121)
  palindrome(125)
  `,
      },
      {
        Exercise:
          "Create a new list from a two list using the following condition",
        solution: `def merge_list(list1, list2):
        result_list = []
        
        # iterate first list
        for num in list1:
            # check if current number is odd
            if num % 2 != 0:
                # add odd number to result list
                result_list.append(num)
        
        # iterate second list
        for num in list2:
            # check if current number is even
            if num % 2 == 0:
                # add even number to result list
                result_list.append(num)
        return result_list
    
    list1 = [10, 20, 25, 30, 35]
    list2 = [40, 45, 60, 75, 90]
    print("result list:", merge_list(list1, list2))
    `,
      },
    ],
  },
  {
    name: "Java",
    questions: [
      {
        Exercise:
          "Write a Java program to print 'Hello' on screen and then print your name on a separate line.",
        solution: `public class Exercise1 {
 
            public static void main(String[] args) {
             System.out.println("Hello\nAlexandra Abramov!");
            }
            
           }
           `,
      },
      {
        Exercise: "Write a Java program to print the sum of two numbers.",
        solution: `import java.util.Scanner;

        public class Main {
          public static void main(String[] args) 
          {
            Scanner input = new Scanner (System.in);
            System.out.print("Input the first number: ");
            int num1 = input.nextInt();
            System.out.print("Input the second number: ");
            int num2 = input.nextInt();
            int sum = num1 + num2;
            System.out.println();
            System.out.println("Sum: "+sum);
          }
        }`,
      },
      {
        Exercise:
          "Write a Java program to divide two numbers and print on the screen.",
        solution: `import java.util.Scanner;

        public class Main {
          public static void main(String[] args) 
          {
            Scanner input = new Scanner (System.in);
            System.out.print("Input the first number: ");
            int a = input.nextInt();
            System.out.print("Input the second number: ");
            int b = input.nextInt();
            int d = (a/b);
            System.out.println();
            System.out.println("The division of a and b is:" +d);
          }
        }`,
      },
      {
        Exercise:
          "Write a Java program to convert a decimal number to binary number.",
        solution: `import java.util.Scanner;
        public class Exercise19 {
              public static void main(String args[])
            {
                int dec_num, quot, i=1, j;
                int bin_num[] = new int[100];
                Scanner scan = new Scanner(System.in);
                
                System.out.print("Input a Decimal Number : ");
                dec_num = scan.nextInt();
                
                quot = dec_num;
                
                while(quot != 0)
                {
                    bin_num[i++] = quot%2;
                    quot = quot/2;
                }
                
                System.out.print("Binary number is: ");
                for(j=i-1; j>0; j--)
                {
                    System.out.print(bin_num[j]);
                }
                System.out.print("\n");
            }
        }
        `,
      },
      {
        Exercise:
          "Write a Java program that takes two numbers as input and display the product of two numbers.",
        solution: `import java.util.Scanner;
 
        public class Exercise5 {
         
         public static void main(String[] args) {
          Scanner in = new Scanner(System.in);
           
          System.out.print("Input first number: ");
          int num1 = in.nextInt();
           
          System.out.print("Input second number: ");
          int num2 = in.nextInt();
           
          System.out.println(num1 + " x " + num2 + " = " + num1 * num2);
         }
         
        }`,
      },
      {
        Exercise:
          "Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers.",
        solution: `import java.util.Scanner;
        public class Main {
         public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
          System.out.println("Input the first number: ");
          int n1 = scanner.nextInt();
          System.out.println("Input the second number: ");
          int n2 = scanner.nextInt();
          int sum = n1 + n2;
          int minus = n1 - n2;
          int multiply = n1 * n2;
          int subtract = n1 + n2;
          int divide = n1 / n2;
          int rnums = n1 % n2;
          System.out.printf("Sum = %d\nMinus = %d\nMultiply = %d\nSubtract = %d\nDivide = %d\nRemainderOf2Numbers = %d\n ", sum, minus, multiply, subtract, divide, rnums);
         }
        }
        `,
      },
      {
        Exercise:
          "Write a Java program that takes a number as input and prints its multiplication table upto 10.",
        solution: `import java.util.Scanner;

        public class Main {
        
         public static void main(String[] args) {
          Scanner in = new Scanner(System.in);
          System.out.println("Input the Number: ");
          int n = in .nextInt();
          for (int i = 1; i <= 10; i++) {
           System.out.println(n + "*" + i + " = " + (n * i));
          }
         }
        }
        `,
      },
      {
        Exercise: "Write a Java program for Swapping two variables.",
        solution: `public class Exercise15 {
            public static void main(String[] args) {
               // int, double, float
             int a, b;
             a = 15;
             b = 27;
             System.out.println("Before swapping : a, b = "+a+", "+ + b);
             a = a + b;
             b = a - b;
             a = a - b;
             System.out.println("After swapping : a, b = "+a+", "+ + b);
           }
           
          }
          `,
      },
      {
        Exercise: "Write a Java program to Add two binary numbers.",
        solution: `import java.util.Scanner;
        public class Exercise17 {
         public static void main(String[] args)
         {
          long binary1, binary2;
          int i = 0, remainder = 0;
          int[] sum = new int[20];
          Scanner in = new Scanner(System.in);
        
          System.out.print("Input first binary number: ");
          binary1 = in.nextLong();
          System.out.print("Input second binary number: ");
          binary2 = in.nextLong();
        
          while (binary1 != 0 || binary2 != 0) 
          {
           sum[i++] = (int)((binary1 % 10 + binary2 % 10 + remainder) % 2);
           remainder = (int)((binary1 % 10 + binary2 % 10 + remainder) / 2);
           binary1 = binary1 / 10;
           binary2 = binary2 / 10;
          }
          if (remainder != 0) {
           sum[i++] = remainder;
          }
          --i;
          System.out.print("Sum of two binary numbers: ");
          while (i >= 0) {
           System.out.print(sum[i--]);
          }
           System.out.print("\n");  
         }
        }
        `,
      },
      {
        Exercise: "Write a Java program to multiply two binary numbers.",
        solution: `import java.util.Scanner;
        public class Exercise18 {
         public static void main(String[] args)
         {
          long binary1, binary2, multiply = 0;
          int digit, factor = 1;
          Scanner in = new Scanner(System.in);
          System.out.print("Input the first binary number: ");
          binary1 = in.nextLong();
          System.out.print("Input the second binary number: ");
          binary2 = in.nextLong();
          while (binary2 != 0)
          {
           digit = (int)(binary2 % 10);
           if (digit == 1) 
           {
            binary1 = binary1 * factor;
            multiply = binaryproduct((int) binary1, (int) multiply);
           } 
           else
           {
            binary1 = binary1 * factor;
           }
           binary2 = binary2 / 10;
           factor = 10;
          }
          System.out.print("Product of two binary numbers: " + multiply+"\n");
         }
         static int binaryproduct(int binary1, int binary2) 
         {
          int i = 0, remainder = 0;
          int[] sum = new int[20];
          int binary_prod_result = 0;
        
          while (binary1 != 0 || binary2 != 0) 
          {
           sum[i++] = (binary1 % 10 + binary2 % 10 + remainder) % 2;
           remainder = (binary1 % 10 + binary2 % 10 + remainder) / 2;
           binary1 = binary1 / 10;
           binary2 = binary2 / 10;
          }
          if (remainder != 0)
          {
           sum[i++] = remainder;
          }
          --i;
          while (i >= 0) 
          {
           binary_prod_result = binary_prod_result * 10 + sum[i--];
          }
          return binary_prod_result;
         }
         }
         `,
      },
    ],
  },
  {
    name: "JavaScript",
    questions: [
      {
        Exercise:
          "Write a JavaScript program to display the current day and time in the following format.",
        solution: `var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
        console.log("Today is : " + daylist[day] + ".");
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;
        if (hour===0 && prepand===' PM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Noon';
        } 
        else
        { 
        hour=12;
        prepand=' PM';
        } 
        } 
        if (hour===0 && prepand===' AM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Midnight';
        } 
        else
        { 
        hour=12;
        prepand=' AM';
        } 
        } 
      console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
      `,
      },
      {
        Exercise:
          "Write a JavaScript function to print the contents of the current window.",
        solution: `function print_current_page()
        {
        window.print();
        }`,
      },
      {
        Exercise:
          "Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.",
        solution: `function sum_Of_Cubes(n) {
          let sumn = 0;
        
          for (let i = 1; i <= n; i++) {
            sumn += i ** 3;
          }
          return sumn;
        }
        
        console.log(sum_Of_Cubes(3));
        console.log(sum_Of_Cubes(4));
        `,
      },
      {
        Exercise:
          "Write a JavaScript program to compute the sum of all digits that occur in a given string.",
        solution: `function sum_digits_from_string(dstr) {
          let dsum = 0;
        
          for (let i = 0; i < dstr.length; i++)
          {
        
            if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
          }
          return dsum;
        }
        
        console.log(sum_digits_from_string("abcd12efg9"))
        console.log(sum_digits_from_string("w3resource"))
        
  `,
      },
      {
        Exercise:
          "Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.",
        solution: `function sumn(val) {
          let sn = 0;
          let i = 0;
          while (sn <= val) {
            sn += i++;
          }
          return i - 2;
        }
        console.log(sumn(11))
        console.log(sumn(15))
        
    `,
      },
      {
        Exercise:
          "Write a JavaScript program to break an address of an url and put it's part into an array.",
        solution: `function break_address(url_add) {
          var data = url_add.split("://")
          var protocol = data[0];
          data = data[1].split(".com");
          var domain = data[0];
          data = data[1].split("/");
      
          if(data[1]){
              return [protocol,domain,data[1]]
          }
      
          return [protocol,domain]
      }
      
      var url_add = "https://www.w3resource.com/javascript-exercises/"
      console.log("Original address: "+url_add)
      console.log(break_address(url_add))
      
      `,
      },
      {
        Exercise:
          "Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.",
        solution: `function find_longest_word(str)
        {
          var array1 = str.match(/\w[a-z]{0,}/gi);
          var result = array1[0];
        
          for(var x = 1 ; x < array1.length ; x++)
          {
            if(result.length < array1[x].length)
            {
            result = array1[x];
            } 
          }
          return result;
        }
        console.log(find_longest_word('Web Development Tutorial'));
        
        `,
      },
      {
        Exercise:
          "Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.",
        solution: `function vowel_count(str1)
        {
          var vowel_list = 'aeiouAEIOU';
          var vcount = 0;
          
          for(var x = 0; x < str1.length ; x++)
          {
            if (vowel_list.indexOf(str1[x]) !== -1)
            {
              vcount += 1;
            }
          
          }
          return vcount;
        }
        console.log(vowel_count("The quick brown fox"));
        
  `,
      },
      {
        Exercise:
          "Write a JavaScript function which returns the n rows by n columns identity matrix.",
        solution: `function matrix(n) {

          var i;
          var j;
  
          for (i=0; i < n; i++)
          {
            for (j=0; j < n; j++)
            {
                 if (i === j)
                 {
                  
                   console.log(' 1 ');
                 }
                        
                 else 
                  {
                   console.log(' 0 ');}
                  }
               console.log('----------');
             }
         }
  matrix(4);
  
    `,
      },
    ],
  },
  {
    name: "React-native",
  },
  {
    name: "Node JS",
  },
  {
    name: "React JS",
  },
  {
    name: "C++",
  },
  {
    name: "Ruby",
  },
  {
    name: "C",
  },
];

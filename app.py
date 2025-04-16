def add(a, b):
    """
    This script provides a simple calculator application with the following functionalities:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage calculation

    Functions:
    - add(a, b): Returns the sum of two numbers.
    - subtract(a, b): Returns the difference between two numbers.
    - multiply(a, b): Returns the product of two numbers.
    - divide(a, b): Returns the quotient of two numbers. Handles division by zero.
    - percentage(a, b): Returns the percentage of 'a' with respect to 'b'. Handles division by zero.
    - calculator(): Provides a command-line interface for the user to select operations and input numbers.

    Usage:
    Run the script and follow the prompts to perform calculations.
    """
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    if b == 0:
        return "Error! Division by zero."
    return (a / b) * 100

def calculator():
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input. Please try again.")

if __name__ == "__main__":
    calculator()

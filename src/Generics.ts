export const Generics = () => {

    function merge<T, U>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 };
    }

    const person = { name: 'John Doe' };
    const employee = { title: 'Software Developer' };

    const fullTimeEmployee = merge(person, employee);
    console.log(fullTimeEmployee); // Output: { name: 'John Doe', title: 'Software Developer' }

    function identity<T>(arg: T): T {
        return arg;
    }
    console.log(identity<number>(10)); // Output: 10
    console.log(identity<string>('Hello')); // Output: Hello






    //Generic function
    function getFirstElement(array: number[]) {
        return array[0];
    }

    // function getFirstElement(array: any[]) {
    //     return array[0];
    // }

    // function getFirstElement(array: (string| number)[]) {
    //     return array[0];
    // }

    //if we try to type with any, it will accept any type of data
    // if we try to type with number | string, it will accept only number or string
    // if we try to type with number[], it will accept only number array

    // this where the idea of type generics comes in, any time we want to use a function that can accept any type of data, we can use generics

    const number = [1, 2, 3, 4]
    const firstNumber = getFirstElement(number);
    console.log(firstNumber);

    // const strings = ['ss','dd','ff']
    // const firstString = getFirstElement(strings);
    // console.log(firstString);


    function getFirstElement1<ElementType>(array: ElementType[]) {
        return array[0];
    }
    // tyscript is smart enough to know the type of data that is being passed to the function
    // if not smart enough, we can specify the type of data that is being passed to the function
    const number1 = [1, 2, 3, 4]
    const firstNumber1 = getFirstElement1(number1);
    console.log(firstNumber1);

    const strings = ['ss', 'dd', 'ff']
    const firstString = getFirstElement1(strings);
    console.log(firstString);


    //with any anything goes in the function
    //typically with dont want any typ in our codebase
    //example two
    // function convertToArray(input:number|string):number[]{ 
    //     return [input];
    // }

    // convertToArray("Hello")

    // tradition function

    function convertToArray<T>(input: T): T[] {  //generic function
        return [input];
    }

    convertToArray("Hello")

    //arrow function
    const convertToArray1 = <T>(input: T): T[] => {
        return [input];
    }
    convertToArray1("Hello")

    //example three
    // function getIndexOfArrayItem<T>(array:T[], item:T){ 
    //     return array.findIndex((element) => element === item);
    // }

    // arrow function
    // const getIndexOfArrayItem = <T>(array:T[], item:T) => {
    //     return array.findIndex((element) => element === item);
    // }


    // const arr = [1,2,3,4,5]
    // const arr = ['a','b','c','d','e']
    // getIndexOfArrayItem(arr, "b")


    //example four
    function createArrayPair<T, U>(firstElement: T, secondElement: U): [T, U] {
        return [firstElement, secondElement];
    }

    // createArrayPair(1, "Hello");
    // createArrayPair("Hello", 1);


    //interface with generics
    interface Box<T> {
        value: T;
    }

    const numberBox: Box<number> = { value: 10 };
    const stringBox: Box<string> = { value: 'Hello' };

    console.log(numberBox.value); // Output: 10
    console.log(stringBox.value); // Output: Hello

    // Generic Interface for API Response Handling
    interface ApiResponse<T> {
        success: boolean;
        data: T;
        error?: string;
    }

    // Example usage:
    const userResponse: ApiResponse<{ name: string; age: number }> = {
        success: true,
        data: { name: "Dennis", age: 25 },
    };

    const errorResponse: ApiResponse<null> = {
        success: false,
        error: "User not found",
        data: null
    };

    console.log(userResponse.data.name); // ✅ Type-safe access
    console.log(errorResponse.error); // ✅ Error message handling

    //   Generic Constraints - Extending Types
    // Sometimes, you need to restrict what types a generic can accept.
    // For example, you might want to ensure that a generic type has a specific property or method.
    // You can do this by using generic constraints.
    // Here's an example of a generic function that accepts only objects with a name property:

    function printName<T extends { name: string }>(obj: T) {
        console.log(obj.name);
    }

    const person1 = { name: 'John Doe', age: 25 };
    const animal = { species: 'Dog' };

    printName(person1); // Output: John Doe
    // printName(animal); // Error: Property 'name' is missing in type '{ species: string; }' but required in type '{ name: string; }'

    // Combining Multiple Generics
    interface KeyValue<K, V> {
        key: K;
        value: V;
    }

    const setting: KeyValue<string, boolean> = {
        key: "darkMode",
        value: true,
    };

    const product: KeyValue<number, string> = {
        key: 101,
        value: "Laptop",
    };

    console.log(setting, product);// Output: { key: 'darkMode', value: true } { key: 101, value: 'Laptop' }


    //   Generic Utility Types (Partial, Readonly, etc.)
    // TypeScript provides several utility types to work with generics more easily.
    // For example, Partial<T> makes all properties of a type optional.
    // Readonly<T> makes all properties of a type read-only.
    // Here's an example of using the Partial utility type:

    interface User {
        id: number;
        name: string;
        email: string;
    }

    // Partial - Makes all properties optional
    type PartialUser = Partial<User>;

    // Readonly - Prevents modifying properties
    type ReadonlyUser = Readonly<User>;

    // Example usage:
    const newUser: PartialUser = { name: "Dennis" }; // ✅ Works with partial data
    const frozenUser: ReadonlyUser = { id: 1, name: "Dennis", email: "d@xyz.com" };
    // frozenUser.name = "John"; ❌ Error: Cannot assign to 'name' because it is a read-only property.




}
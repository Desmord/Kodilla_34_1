{
    const persons: string[] = [];

    function addPerson(firstName: string, lastName: string) {
        const name = firstName + lastName;
        persons.push(name);
    }

    let firstName: string = 'John';
    let lastName: string = 'Doe';
    let age: number = 18;

    const person: {
        firstName: string;
        lastName: string
    } = {
        firstName,
        lastName
    }

    addPerson(person.firstName, person.lastName);
    addPerson('Amanda', 'Doe');
    addPerson('Thomas', 'Jefferson');
}

{

    enum Roles {
        Admin,
        Moderator,
        User
    }



    const JohnDoe: {
        id: number | string;
        firstName: string;
        lastName: string;
        role: Roles
    } = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Admin
    }

    const AmandaDoe: {
        id: number | string;
        firstName: string;
        lastName: string;
        role: Roles
    } = {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Moderator
    }

    const ThomasJefferson: {
        id: number | string;
        firstName: string;
        lastName: string;
        role: Roles
    } = {
        id: 'rwe5345sfst3453543',
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.User
    }

    const names: [string, string, string] = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName];
    const JohnDoeSummary: [string, string, Roles] = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role];


    function join(valOne: number | string, valTwo: number | string) {
        if (typeof valOne === 'number' && typeof valTwo === 'number') {
            return valOne + valTwo;
        } else if (typeof valOne === 'string' && typeof valTwo === 'string') {
            return valOne.toString() + valTwo.toString();
        }
        return false
    }

    const one = join('John', 'Doe'); // should return JohnDoe
    const two = join(5, 6); // should return 11
    const three = join(5, '5'); // should return false

}

{
    function showMyName(name: string): void {
        console.log(name)
    }

    showMyName('John')

    function square(a: number): number {
        return a * a
    }

    square(10)

    function sum(title: string, ...numbers: number[]) {
        return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
    }

    sum('Numbers', 1, 6, 10)

    const executeFunc = (func: (title: string, number: number, sports: string[]) => boolean) => {
        const title = 'Lorem Ipsum'
        func(title, 24, ['Sport', 'Movies'])
    }

    executeFunc((title, age, hobbies) => { return true })
}

{
    type strNumBol = string | number | boolean;
    type fooType = strNumBol;
    type bazType = strNumBol;

    let foo: fooType
    foo = 'bar';
    foo = 12;
    foo = false;

    const bar: number = 12;

    function baz(param: string): bazType {
        return param;
    }
}

{
    type Person = {
        firstName: string;
        lastName: string;
        age: number
    }

    const per: Person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    }

    type paramType = 'firstName' | 'lastName' | 'age';
    type paramReturnType = string | number;

    function showParam(param: paramType): paramReturnType {
        return per[param]
    }

    let age = <number>showParam('age')
    let firstName = <string>showParam('firstName')
}
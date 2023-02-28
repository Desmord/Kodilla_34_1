{
    var persons_1 = [];
    function addPerson(firstName, lastName) {
        var name = firstName + lastName;
        persons_1.push(name);
    }
    var firstName = 'John';
    var lastName = 'Doe';
    var age = 18;
    var person = {
        firstName: firstName,
        lastName: lastName
    };
    addPerson(person.firstName, person.lastName);
    addPerson('Amanda', 'Doe');
    addPerson('Thomas', 'Jefferson');
}
{
    var Roles = void 0;
    (function (Roles) {
        Roles[Roles["Admin"] = 0] = "Admin";
        Roles[Roles["Moderator"] = 1] = "Moderator";
        Roles[Roles["User"] = 2] = "User";
    })(Roles || (Roles = {}));
    var JohnDoe = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Admin
    };
    var AmandaDoe = {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Moderator
    };
    var ThomasJefferson = {
        id: 'rwe5345sfst3453543',
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.User
    };
    var names = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName];
    var JohnDoeSummary = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role];
    function join(valOne, valTwo) {
        if (typeof valOne === 'number' && typeof valTwo === 'number') {
            return valOne + valTwo;
        }
        else
            (typeof valOne === 'string' && typeof valTwo === 'string');
        {
            return valOne.toString() + valTwo.toString();
        }
        return false;
    }
    var one = join('John', 'Doe'); // should return JohnDoe
    var two = join(5, 6); // should return 11
    var three = join(5, '5'); // should return false
}

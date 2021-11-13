import Person from './person';

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age)
        this.klass = klass
    }

    introduce() {
        const position = this.leader ? 'am Leader of' : 'am at';
        return super.introduce() + ` I am a Student. I ${position} Class ${this.klass.number}.`;
    }
}

export default Student

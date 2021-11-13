import Person from './person';

class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses
    }

    introduce() {
        const klassesNum = this.klasses ? `Class ${this.klasses.map(klass => klass.number).join(', ')}` : 'No Class'
        return super.introduce() + ` I am a Teacher. I teach ${klassesNum}.`
    }

    notify(student, klass, event) {
        event(this.name, student, klass)
    }
}

export default Teacher;



const eventType = {
    JOIN: (name, student, klass) => console.log(`I am ${name}. I know ${student.name} has joined Class ${klass.number}.`),
    LEADER_CHANGE: (name, student, klass) => console.log(`I am ${name}. I know ${student.name} become Leader of Class ${klass.number}.`)
}

module.exports = eventType;


import eventType from './eventType'

class Class {
    constructor(number) {
        this.number = number
        this.leader = null
    }

    assignLeader(student) {
        if (student.klass === this) {
            student.leader = true
            this.leader = student
            this.assignLeaderListener && this.assignLeaderListener.notify(student, this, eventType.LEADER_CHANGE)
        }
    }

    appendMember(student) {
        student.klass = this
        this.joinListener && this.joinListener.notify(student, this, eventType.JOIN)
    }

    registerAssignLeaderListener(teacher) {
        this.assignLeaderListener = teacher
    }

    registerJoinListener(teacher) {
        this.joinListener = teacher
    }

    getDisplayName() {
        return `Class ${this.number}`
    }
}

module.exports = Class;


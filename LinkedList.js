class Node{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node;
    }
    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }

    toArray() {
        let output = [];
        let current = this.head;

        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }

    find(data) {
        if (!this.head) {
            return ;
        }
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(5);
list.prepend(6);
console.log(list.toArray());
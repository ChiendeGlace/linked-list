const nodeFactory = (data = null, next = null) => {
    return { data, next };
};

const linkedListFactory = (head = null) => {
    const append = (value) => {
        let newNode = nodeFactory(value);
        let node = head;
        if (head !== null) {
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
        return node;
    };
    const prepend = (value) => {
        let newNode = nodeFactory(value);
        if (head === null) {
            return (head = newNode);
        }
        newNode.next = head;
        head = newNode;
        return head;
    };
    const findSize = () => {
        let count = 0;
        let node = head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    const findHead = () => {
        if (head == null) {
            return null;
        }
        return head.data;
    };
    const findTail = () => {
        let node = head;
        if (head == null) {
            return null;
        }
        while (node.next) {
            node = node.next;
        }
        return node.data;
    };
    const atIndex = (index) => {
        let node = head;
        if (head == null) {
            return null;
        }
        for (let i = 0; i < index; i++) {
            node = node.next;
            if (node == null) {
                return null;
            }
        }
        return node;
    };
    const pop = () => {
        let node = head;
        while (node.next.next !== null) {
            node = node.next;
        }
        node.next = null;
    };
    const contains = (value) => {
        let node = head;
        while (node) {
            if (node.data == value) {
                return true;
            }
            node = node.next;
        }
        return false;
    };
    const findValue = (value) => {
        let node = head;
        let counter = 0;
        while (node) {
            if (node.data == value) {
                return counter;
            }
            node = node.next;
            counter++;
        }
        return false;
    };
    const toString = () => {
        let node = head;
        let result = '';
        if (head == null) {
            return null;
        }
        while (node) {
            result = result.concat(`( ${node.data} ) -> `);
            node = node.next;
        }
        result = result.concat('null');
        return result;
    };
    const insertAt = (value, index) => {
        let newNode = nodeFactory(value);
        let node = head;
        if (index == 0) {
            if (head === null) {
                return (head = newNode);
            }
            newNode.next = head;
            head = newNode;
            return head;
        }
        for (let i = 1; i < index; i++) {
            node = node.next;
            if (node == null) {
                if (i - index == 1) {
                    node.next = newNode;
                } else {
                    return null;
                }
            }
        }
        newNode.next = node.next;
        node.next = newNode;
        return head;
    };
    const removeAt = (index) => {
        if (Number.isInteger(index)) {
            let node = head;
            if (head == null) {
                return null;
            }
            if (index == 0) {
                head = head.next;
            }
            for (let i = 1; i < index; i++) {
                node = node.next;
                if (node.next == null) {
                    return null;
                }
            }
            node.next = node.next.next;
            return head;
        }
        return null;
    };

    return {
        head,
        append,
        prepend,
        findSize,
        findHead,
        findTail,
        atIndex,
        pop,
        contains,
        findValue,
        toString,
        insertAt,
        removeAt,
    };
};

let x1 = nodeFactory(500);
let x2 = nodeFactory(200);
x1.next = x2;
let list = linkedListFactory(x1);
console.log(list.findSize());
list.prepend(300);
console.log(list.toString());
console.log(list.insertAt(140, 2));
console.log(list.removeAt());
console.log(list.toString());

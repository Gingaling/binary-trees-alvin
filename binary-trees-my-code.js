// Binary tree represented programmatically
//         a
//        / \
//       b   c
//v     / \   \
//     d    e   f
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Depth First Values - Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order

function depthFirstValues(root) {
    if (root === null) return [];
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
}

depthFirstValues(a);

// Same as above except coded recursively

function depthFirstValues(root) {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.value, ...leftValues, ...rightValues ];
}

console.log(depthFirstValues(a));

// Breadth First Values - Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function breadthFirstValues(root) {
    if (root === null) return [];

    const values = [];
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left != null) queue.push(current.left);
        if (current.right != null) queue.push(current.right);
    }
    return values;
}

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

// Tree Includes - Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// breadth first implementation

function treeIncludes(root, target) {
	if (root === null) return [];

	let queue = [root];

	while (queue.length > 0) {
		const current = queue.shift();
		if (current.val === target) return true;

		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return false;
}

treeIncludes(a, "e"); // -> true
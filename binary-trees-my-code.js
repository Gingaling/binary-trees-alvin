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
	const queue = [root];
	while (queue.length > 0) {
		const current = queue.shift();
		if (current.val === target) return true;

		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return false;
}

treeIncludes(a, "e"); // -> true

// Tree Includes, however, this time implemented recursively depth first

function treeIncludes(root, target) {
    if (root === null) return false;
    if (root === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

// Tree Sum - Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

function treeSum(root) {
    if (root === null) return 0;
    return root.value + treeSum(root.left )+ treeSum(root.right);
}


treeSum(a); // -> 21

// Tree Sum - depth first, iterative

function treeSum(root) {
    if (root === null) return 0;
    let totalSum = 0;
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        totalSum += current.val;
        if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
    }
    return totalSum;
}

// Tree Min Value - Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// Depth First, iterative

function treeMinValue(root) {
    let smallest = Infinity;
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
    }
    return smallest;
}

treeMinValue(a); // -> -2

// Same as above, except coded recursively

function treeMinValue(root) {
    if (root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
}

// Max Root-to-Leaf Path Sum - Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// Recursive solution

function maxPathSum(root) {
    if (root === null) return -Infinity;
    if (root.left === null  && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChildPathSum;
}

maxPathSum(a); // -> 18
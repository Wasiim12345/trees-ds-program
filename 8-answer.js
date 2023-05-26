// (8) Count subtress that sum up to a given value x in a binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node.left === null) {
            node.left = newNode;
        } else if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    }

    countSubtreesWithSumX(x) {
        return this.countSubtreesWithSumXRecursive(this.root, x);
    }

    countSubtreesWithSumXRecursive(node, x) {
        if (node === null) {
            return 0;
        }

        const leftCount = this.countSubtreesWithSumXRecursive(node.left, x);
        const rightCount = this.countSubtreesWithSumXRecursive(node.right, x);

        const subtreeSum = node.value + leftCount + rightCount;

        if (subtreeSum === x) {
            return 1 + leftCount + rightCount;
        } else {
            return leftCount + rightCount;
        }
    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(-10);
binaryTree.insert(3);
binaryTree.insert(9);
binaryTree.insert(8);
binaryTree.insert(-4);
binaryTree.insert(7);
binaryTree.insert(2);

const x = 7;
const count = binaryTree.countSubtreesWithSumX(x);
console.log("Number of subtrees with sum", x + ":", count);  
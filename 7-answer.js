// (7) Find sum of all nodes of the given perfect binary tree
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

    sumOfAllNodes() {
        return this.sumOfAllNodesRecursive(this.root);
    }

    sumOfAllNodesRecursive(node) {
        if (node === null) {
            return 0;
        }

        const leftSum = this.sumOfAllNodesRecursive(node.left);
        const rightSum = this.sumOfAllNodesRecursive(node.right);

        return node.value + leftSum + rightSum;
    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);

const sum = binaryTree.sumOfAllNodes();
console.log("Sum of all nodes:", sum);  
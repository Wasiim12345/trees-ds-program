// (6) Find sum of all left leaves in a given Binary Tree
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
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    sumOfLeftLeaves() {
        return this.sumOfLeftLeavesRecursive(this.root, false);
    }

    sumOfLeftLeavesRecursive(node, isLeft) {
        if (node === null) {
            return 0;
        }

        if (node.left === null && node.right === null && isLeft) {
            return node.value;
        }

        const leftSum = this.sumOfLeftLeavesRecursive(node.left, true);
        const rightSum = this.sumOfLeftLeavesRecursive(node.right, false);

        return leftSum + rightSum;
    }
}

const binaryTree = new BinaryTree();

binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(14);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(13);

const sum = binaryTree.sumOfLeftLeaves();
console.log("Sum of left leaves:", sum);  
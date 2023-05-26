// (2) Find height of a given tree
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

    getHeight() {
        return this.getHeightRecursive(this.root);
    }

    getHeightRecursive(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = this.getHeightRecursive(node.left);
        const rightHeight = this.getHeightRecursive(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
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

const height = binaryTree.getHeight();
console.log("Height of the tree:", height);  
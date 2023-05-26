// (10) Print the nodes at odd levels of a tree
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

    printNodesAtOddLevels() {
        this.printNodesAtOddLevelsRecursive(this.root, 1);
    }

    printNodesAtOddLevelsRecursive(node, level) {
        if (node === null) {
            return;
        }

        if (level % 2 === 1) {
            console.log(node.value);
        }

        this.printNodesAtOddLevelsRecursive(node.left, level + 1);
        this.printNodesAtOddLevelsRecursive(node.right, level + 1);
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

console.log("Nodes at odd levels:");
binaryTree.printNodesAtOddLevels();  
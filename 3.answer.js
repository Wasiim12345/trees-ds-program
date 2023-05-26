// (3) Perform Pre-order, Post-order, In-order traversal
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

    preOrderTraversal(callback) {
        this.preOrderTraversalNode(this.root, callback);
    }

    preOrderTraversalNode(node, callback) {
        if (node !== null) {
            callback(node.value);
            this.preOrderTraversalNode(node.left, callback);
            this.preOrderTraversalNode(node.right, callback);
        }
    }

    inOrderTraversal(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    inOrderTraversalNode(node, callback) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }

    postOrderTraversal(callback) {
        this.postOrderTraversalNode(this.root, callback);
    }

    postOrderTraversalNode(node, callback) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, callback);
            this.postOrderTraversalNode(node.right, callback);
            callback(node.value);
        }
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

console.log("Pre-order traversal:");
binaryTree.preOrderTraversal((value) => {
    console.log(value);
});

console.log("In-order traversal:");
binaryTree.inOrderTraversal((value) => {
    console.log(value);
});

console.log("Post-order traversal:");
binaryTree.postOrderTraversal((value) => {
    console.log(value);
});  
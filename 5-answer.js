// (5) Implement BFS (Breath First Search) and DFS (Depth First Search)
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

    bfs() {
        if (this.root === null) {
            return;
        }

        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.value);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    dfs() {
        if (this.root === null) {
            return;
        }

        this.dfsRecursive(this.root);
    }

    dfsRecursive(node) {
        if (node !== null) {
            console.log(node.value);
            this.dfsRecursive(node.left);
            this.dfsRecursive(node.right);
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

console.log("Breadth First Search (BFS):");
binaryTree.bfs();

console.log("Depth First Search (DFS):");
binaryTree.dfs();  
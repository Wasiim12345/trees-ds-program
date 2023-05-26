// (9) Find maximum level sum in Binary Tree
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

    maximumLevelSum() {
        let maxSum = Number.NEGATIVE_INFINITY;
        let maxLevel = 0;

        const queue = [];
        queue.push(this.root);

        let level = 0;

        while (queue.length > 0) {
            let levelSum = 0;
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                levelSum += node.value;

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            if (levelSum > maxSum) {
                maxSum = levelSum;
                maxLevel = level;
            }

            level++;
        }

        return maxSum;
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

const maxLevelSum = binaryTree.maximumLevelSum();
console.log("Maximum level sum:", maxLevelSum);  
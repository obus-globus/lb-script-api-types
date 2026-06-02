import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../net/minecraft/world/level/pathfinder/Node.d.ts'
export class BinaryHeap extends Object {
    constructor()
    readonly heap: Node[];
    // private size: number;
    changeCost(node: Node, newCost: number): void;
    clear(): void;
    // private downHeap(idx: number): void;
    getHeap(): Node[];
    insert(node: Node): Node;
    isEmpty(): boolean;
    peek(): Node;
    pop(): Node;
    remove(node: Node): void;
    size(): number;
    // private upHeap(idx: number): void;
}
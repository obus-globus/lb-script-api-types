import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeMultiset$AvlNode<E extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(elem: E, elemCount: number)
    // private distinctElements: number;
    // private elem: E;
    // private elemCount: number;
    // private height: number;
    // private left: TreeMultiset$AvlNode<E>;
    // private pred: TreeMultiset$AvlNode<E>;
    // private right: TreeMultiset$AvlNode<E>;
    // private succ: TreeMultiset$AvlNode<E>;
    // private totalCount: number;
    add(comparator: (param0: E) => kotlin.Boolean, e: E, count: number, result: number[]): TreeMultiset$AvlNode<E>;
    // private addLeftChild(e: E, count: number): TreeMultiset$AvlNode<E>;
    // private addRightChild(e: E, count: number): TreeMultiset$AvlNode<E>;
    // private balanceFactor(): number;
    // private ceiling(comparator: (param0: E) => kotlin.Boolean, e: E): TreeMultiset$AvlNode<E>;
    count(comparator: (param0: E) => kotlin.Boolean, e: E): number;
    // private deleteMe(): TreeMultiset$AvlNode<E>;
    // private floor(comparator: (param0: E) => kotlin.Boolean, e: E): TreeMultiset$AvlNode<E>;
    getCount(): number;
    getElement(): E;
    // private pred(): TreeMultiset$AvlNode<E>;
    // private rebalance(): TreeMultiset$AvlNode<E>;
    // private recompute(): void;
    // private recomputeHeight(): void;
    // private recomputeMultiset(): void;
    remove(comparator: (param0: E) => kotlin.Boolean, e: E, count: number, result: number[]): TreeMultiset$AvlNode<E>;
    // private removeMax(node: TreeMultiset$AvlNode<E>): TreeMultiset$AvlNode<E>;
    // private removeMin(node: TreeMultiset$AvlNode<E>): TreeMultiset$AvlNode<E>;
    // private rotateLeft(): TreeMultiset$AvlNode<E>;
    // private rotateRight(): TreeMultiset$AvlNode<E>;
    setCount(comparator: (param0: E) => kotlin.Boolean, e: E, expectedCount: number, newCount: number, result: number[]): TreeMultiset$AvlNode<E>;
    setCount(comparator: (param0: E) => kotlin.Boolean, e: E, count: number, result: number[]): TreeMultiset$AvlNode<E>;
    // private succ(): TreeMultiset$AvlNode<E>;
    toString(): string;
}
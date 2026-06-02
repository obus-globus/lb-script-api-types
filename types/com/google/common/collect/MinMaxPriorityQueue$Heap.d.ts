import type { MinMaxPriorityQueue$MoveDesc } from '../../../../com/google/common/collect/MinMaxPriorityQueue$MoveDesc.d.ts'
import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinMaxPriorityQueue$Heap extends Object {
    constructor(null_: MinMaxPriorityQueue$Heap)
    // private ordering: Ordering<E>;
    // private otherHeap: MinMaxPriorityQueue$Heap;
    bubbleUp<E extends Object | number | string | boolean>(index: number, x: E): void;
    bubbleUpAlternatingLevels<E extends Object | number | string | boolean>(index: number, x: E): number;
    compareElements(a: number, b: number): number;
    crossOver<E extends Object | number | string | boolean>(index: number, x: E): number;
    crossOverUp<E extends Object | number | string | boolean>(index: number, x: E): number;
    fillHoleAt(index: number): number;
    findMin(index: number, len: number): number;
    findMinChild(index: number): number;
    findMinGrandChild(index: number): number;
    // private getGrandparentIndex(i: number): number;
    // private getLeftChildIndex(i: number): number;
    // private getParentIndex(i: number): number;
    // private getRightChildIndex(i: number): number;
    swapWithConceptuallyLastElement<E extends Object | number | string | boolean>(actualLastElement: E): number;
    tryCrossOverAndBubbleUp<E extends Object | number | string | boolean>(removeIndex: number, vacated: number, toTrickle: E): MinMaxPriorityQueue$MoveDesc<E>;
    // private verifyIndex(i: number): boolean;
}
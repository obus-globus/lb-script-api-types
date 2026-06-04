import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { ThreadSafeHeapNode } from '../../../kotlinx/coroutines/internal/ThreadSafeHeapNode.d.ts'
export class ThreadSafeHeap<T extends ThreadSafeHeapNode & Comparable<T>> extends Object {
    constructor()
    addImpl(node: T): void;
    addLast(node: T): void;
    addLastIf(node: T, cond: (param0: T | null) => boolean): boolean;
    find(predicate: (param0: T) => boolean): T | null;
    firstImpl(): T | null;
    peek(): T | null;
    // private realloc(): (T | null)[];
    remove(node: T): boolean;
    removeAtImpl(index: number): T;
    removeFirstIf(predicate: (param0: T) => boolean): T | null;
    removeFirstOrNull(): T | null;
    // private siftDownFrom(i: number): void;
    // private siftUpFrom(i: number): void;
    // private swap(i: number, j: number): void;
}
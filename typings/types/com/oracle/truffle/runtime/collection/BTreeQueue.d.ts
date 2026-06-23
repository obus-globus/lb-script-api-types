import type { BTreeQueue$Inner } from '../../../../../com/oracle/truffle/runtime/collection/BTreeQueue$Inner.d.ts'
import type { BTreeQueue$Node } from '../../../../../com/oracle/truffle/runtime/collection/BTreeQueue$Node.d.ts'
import type { SerialQueue } from '../../../../../com/oracle/truffle/runtime/collection/SerialQueue.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BTreeQueue<E extends unknown> extends Object implements SerialQueue<E> {
    constructor()
    // private root: BTreeQueue$Node<E>;
    add(x: E): void;
    addIndexOf(x: E): number;
    // private check(node: BTreeQueue$Node<E>, maxArg: Object): number;
    checkInvariants(): void;
    clear(): void;
    // private compare(a: Object, b: Object): number;
    // private compareUnique(a: Object, b: Object): number;
    indexBefore(x: E): number;
    indexOf(x: E): number;
    // private insert(node: BTreeQueue$Node<E>, x: E): Object;
    // private insertAll(node: BTreeQueue$Node<E>): void;
    // private insertChildAt(inner: BTreeQueue$Inner<E>, from: number, nchild: BTreeQueue$Node<E>): void;
    // private insertRoot(x: E): boolean;
    internalCapacity(): number;
    // private lookupFirst(node: BTreeQueue$Node<E>): E;
    peek(): E;
    poll(): E;
    prettyString(): string;
    // private prettyString(node: BTreeQueue$Node<E>, indentation: number, result: StringBuilder): void;
    // private removeFirst(node: BTreeQueue$Node<E>): Object;
    // private removeFirstRoot(): E;
    size(): number;
    toArray(): Object[];
    toArray<T extends unknown>(a: T[]): T[];
    // private toArray(result: Object[], from: number, node: BTreeQueue$Node<E>): void;
}
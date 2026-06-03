import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FastBinaryMinHeap$Entry } from '../../../../org/cloudburstmc/netty/util/FastBinaryMinHeap$Entry.d.ts'
export class FastBinaryMinHeap<E extends Object | number | string | boolean> extends AbstractReferenceCounted {
    constructor()
    constructor(arg0: number)
    // private heap: FastBinaryMinHeap$Entry[];
    // private size: number;
    deallocate(): void;
    // private ensureCapacity(arg0: number): void;
    insert(arg0: number, arg1: E): void;
    // private insert0(arg0: number, arg1: E): void;
    insertSeries(arg0: number, arg1: E[]): void;
    isEmpty(): boolean;
    peek(): E;
    poll(): E;
    remove(): void;
    // private resize(arg0: number): void;
    size(): number;
    touch(): ReferenceCounted;
    touch(arg0: Object): FastBinaryMinHeap<E>;
}
import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
export class AtomicArray<T extends Object | number | string | boolean> extends Object {
    constructor(size: number)
    // private array: AtomicRef<T>[];
    readonly size: number;
    get(index: number): AtomicRef<T>;
}
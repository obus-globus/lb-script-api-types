import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
export class AtomicIntArray extends Object {
    constructor(size: number)
    // private array: AtomicInt[];
    readonly size: number;
    get(index: number): AtomicInt;
}
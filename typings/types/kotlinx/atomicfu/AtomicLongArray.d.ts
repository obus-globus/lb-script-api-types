import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicLong } from '../../kotlinx/atomicfu/AtomicLong.d.ts'
export class AtomicLongArray extends Object {
    constructor(size: number)
    // private array: AtomicLong[];
    readonly size: number;
    get(index: number): AtomicLong;
}
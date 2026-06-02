import type { Object } from '../../java/lang/Object.d.ts'
import type { AtomicBoolean } from '../../kotlinx/atomicfu/AtomicBoolean.d.ts'
export class AtomicBooleanArray extends Object {
    constructor(size: number)
    // private array: AtomicBoolean[];
    readonly size: number;
    get(index: number): AtomicBoolean;
}
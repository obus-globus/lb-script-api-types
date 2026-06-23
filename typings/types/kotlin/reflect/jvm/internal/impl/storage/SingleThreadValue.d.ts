import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SingleThreadValue<T extends unknown> extends Object {
    constructor(arg0: T)
    // private thread: Thread;
    readonly value: T;
    getValue(): T;
    hasValue(): boolean;
}
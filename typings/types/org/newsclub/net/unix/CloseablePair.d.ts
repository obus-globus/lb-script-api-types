import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CloseablePair<T extends Closeable> extends Object implements Closeable {
    constructor(arg0: T, arg1: T)
    constructor(arg0: T, arg1: T, arg2: Closeable)
    // private alsoClose: Closeable;
    readonly first: T;
    readonly second: T;
    close(): void;
    getFirst(): T;
    getSecond(): T;
}
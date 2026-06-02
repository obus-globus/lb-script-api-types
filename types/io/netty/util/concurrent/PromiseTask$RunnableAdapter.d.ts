import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PromiseTask$RunnableAdapter<T extends Object | number | string | boolean> extends Object implements Callable<T> {
    constructor(arg0: () => void, arg1: T)
    // private result: T;
    // private task: () => void;
    call(): T;
    toString(): string;
}
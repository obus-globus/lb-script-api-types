import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$DeferredCloser extends Object {
    constructor(arg0: { [key: string]: any }, arg1: () => V)
    // private list: { [key: string]: any };
    eventuallyClose<C extends unknown & AutoCloseable>(closeable: C, closingExecutor: Executor): C;
}
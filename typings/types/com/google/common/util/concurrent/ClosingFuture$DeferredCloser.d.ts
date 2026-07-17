import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$DeferredCloser extends Object {
    private constructor(list: JavaMap<any, any>)
    // private list: JavaMap<any, any>;
    eventuallyClose<C extends unknown & AutoCloseable>(closeable: C, closingExecutor: Executor): C;
}
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture$DeferredCloser extends Object {
    constructor(list: ClosingFuture$CloseableList)
    // private list: ClosingFuture$CloseableList;
    eventuallyClose<C extends Object | number | string | boolean & AutoCloseable>(closeable: C, closingExecutor: Executor): C;
}
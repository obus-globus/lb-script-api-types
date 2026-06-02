import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TotalCountResult } from '../../../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
import type { TotalCountResult$STATUS } from '../../../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult$STATUS.d.ts'
import type { TotalCounter } from '../../../../../../org/apache/tika/pipes/pipesiterator/TotalCounter.d.ts'
export class FileSystemPipesIterator$FileCountWorker extends Object implements Closeable, TotalCounter {
    constructor(arg0: Path[])
    // private basePath: Path[];
    // private finalResult: TotalCountResult;
    // private status: TotalCountResult$STATUS;
    readonly totalCount: AtomicLong;
    // private totalCounterThread: Thread;
    close(): void;
    getTotalCount(): TotalCountResult;
    startTotalCount(): void;
}
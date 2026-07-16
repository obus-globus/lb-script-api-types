import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { ExecutorCompletionService } from '../../../../../java/util/concurrent/ExecutorCompletionService.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FetchEmitTuple } from '../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { AsyncConfig } from '../../../../../org/apache/tika/pipes/async/AsyncConfig.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { TotalCounter } from '../../../../../org/apache/tika/pipes/pipesiterator/TotalCounter.d.ts'
export class AsyncProcessor extends Object implements Closeable {
    constructor(arg0: Path)
    constructor(arg0: Path, arg1: FetchEmitTuple[])
    // private addedEmitterSemaphores: boolean;
    // private asyncConfig: AsyncConfig;
    // private emitData: EmitData[];
    // private executorCompletionService: ExecutorCompletionService<number>;
    // private executorService: ExecutorService;
    // private fetchEmitTuples: FetchEmitTuple[];
    // private isShuttingDown: boolean;
    // private numEmitterThreadsFinished: number;
    // private numParserThreadsFinished: number;
    readonly totalProcessed: AtomicLong;
    checkActive(): boolean;
    close(): void;
    finished(): void;
    getCapacity(): number;
    getTotalProcessed(): number;
    offer(arg0: FetchEmitTuple[], arg1: number): boolean;
    offer(arg0: FetchEmitTuple, arg1: number): boolean;
    // private startCounter(arg0: TotalCounter): void;
}
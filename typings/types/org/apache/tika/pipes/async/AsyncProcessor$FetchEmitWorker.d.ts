import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FetchEmitTuple } from '../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesResult } from '../../../../../org/apache/tika/pipes/PipesResult.d.ts'
import type { AsyncConfig } from '../../../../../org/apache/tika/pipes/async/AsyncConfig.d.ts'
import type { AsyncProcessor } from '../../../../../org/apache/tika/pipes/async/AsyncProcessor.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
export class AsyncProcessor$FetchEmitWorker extends Object implements Callable<number> {
    private constructor(null_: AsyncProcessor, arg1: AsyncConfig, arg2: FetchEmitTuple[], arg3: EmitData[])
    // private asyncConfig: AsyncConfig;
    // private emitDataQueue: EmitData[];
    // private fetchEmitTuples: FetchEmitTuple[];
    call(): number;
    // private shouldEmit(arg0: PipesResult): boolean;
}
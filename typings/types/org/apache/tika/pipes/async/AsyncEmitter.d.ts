import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AsyncConfig } from '../../../../../org/apache/tika/pipes/async/AsyncConfig.d.ts'
import type { EmitData } from '../../../../../org/apache/tika/pipes/emitter/EmitData.d.ts'
import type { EmitterManager } from '../../../../../org/apache/tika/pipes/emitter/EmitterManager.d.ts'
export class AsyncEmitter extends Object implements Callable<number> {
    constructor(arg0: AsyncConfig, arg1: EmitData[], arg2: EmitterManager)
    // private asyncConfig: AsyncConfig;
    // private emitDataQueue: EmitData[];
    // private emitterManager: EmitterManager;
    // private lastEmitted: Instant;
    call(): number;
}
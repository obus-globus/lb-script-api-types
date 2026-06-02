import type { Semaphore } from '../../../../../../../../../java/util/concurrent/Semaphore.d.ts'
import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkBuilder.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { ChunkJobResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobResult.d.ts'
export class ChunkJobCollector extends Object {
    constructor(arg0: (param0: ChunkJobResult<BuilderTaskOutput>) => void)
    constructor(arg0: number, arg1: (param0: ChunkJobResult<BuilderTaskOutput>) => void)
    // private collector: (param0: ChunkJobResult<BuilderTaskOutput>) => void;
    // private duration: number;
    // private semaphore: Semaphore;
    // private submitted: ChunkJob[];
    addSubmittedJob(arg0: ChunkJob): void;
    awaitCompletion(arg0: ChunkBuilder): void;
    getSubmittedTaskCount(): number;
    hasBudgetRemaining(): boolean;
    onJobFinished(arg0: ChunkJobResult<BuilderTaskOutput>): void;
}
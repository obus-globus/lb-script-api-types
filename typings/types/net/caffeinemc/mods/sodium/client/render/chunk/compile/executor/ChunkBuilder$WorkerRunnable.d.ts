import type { Runnable } from '../../../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { ChunkBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkBuilder.d.ts'
export class ChunkBuilder$WorkerRunnable extends Object implements Runnable {
    constructor(null_: ChunkBuilder, arg1: string, arg2: ChunkBuildContext)
    // private context: ChunkBuildContext;
    // private name: string;
    run(): void;
}
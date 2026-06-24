import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { CancellationToken } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
export interface ChunkJob extends Object, CancellationToken{
    execute(arg0: ChunkBuildContext): void;
    getEstimatedDuration(): number;
    isCancelled(): boolean;
    isStarted(): boolean;
    setCancelled(): void;
}
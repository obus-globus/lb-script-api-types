import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelChunk } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ChunkStatusTracker extends Object {
    static onChunkAccessible(paramarg0: ServerLevel, paramarg1: LevelChunk): void;
    static onChunkInaccessible(paramarg0: ServerLevel, paramarg1: ChunkPos): void;
    static registerLoadCallback(paramarg0: (param0: ServerLevel, param1: LevelChunk) => void): void;
    static registerUnloadCallback(paramarg0: (param0: ServerLevel, param1: ChunkPos) => void): void;
    constructor()
}
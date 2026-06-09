import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface NaturalSpawner$ChunkGetter extends Object {
    query(chunkKey: number, output: (param0: LevelChunk) => void): void;
}
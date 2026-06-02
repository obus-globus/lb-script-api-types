import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface LevelChunk$PostLoadProcessor extends Object{
    run(levelChunk: LevelChunk): void;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelChunk } from '../../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface ClientChunkEvents$Unload extends Object{
    onChunkUnload(arg0: ClientLevel, arg1: LevelChunk): void;
}
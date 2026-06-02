import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkHolder } from '../../../../net/minecraft/server/level/ChunkHolder.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class ChunkLoadCounter extends Object {
    constructor()
    // private pendingChunks: ChunkHolder[];
    // private totalChunks: number;
    pendingChunks(): number;
    readyChunks(): number;
    totalChunks(): number;
    track(level: ServerLevel, scheduler: () => void): void;
}
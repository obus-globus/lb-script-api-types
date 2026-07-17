import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LevelLoadListener } from '../../../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { LevelLoadListener$Stage } from '../../../../../net/minecraft/server/level/progress/LevelLoadListener$Stage.d.ts'
import type { LevelLoadProgressTracker } from '../../../../../net/minecraft/server/level/progress/LevelLoadProgressTracker.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class LoggingLevelLoadListener extends Object implements LevelLoadListener {
    static forDedicatedServer(): LoggingLevelLoadListener;
    static forSingleplayer(): LoggingLevelLoadListener;
    constructor(includePlayerChunks: boolean)
    // private closed: boolean;
    // private includePlayerChunks: boolean;
    // private nextLogTime: number;
    // private progressTracker: LevelLoadProgressTracker;
    // private startTime: number;
    finish(stage: LevelLoadListener$Stage): void;
    start(stage: LevelLoadListener$Stage, totalChunks: number): void;
    update(stage: LevelLoadListener$Stage, currentChunks: number, totalChunks: number): void;
    updateFocus(dimension: ResourceKey<Level>, chunkPos: ChunkPos): void;
}
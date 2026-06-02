import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LevelLoadListener } from '../../../../../net/minecraft/server/level/progress/LevelLoadListener.d.ts'
import type { LevelLoadListener$Stage } from '../../../../../net/minecraft/server/level/progress/LevelLoadListener$Stage.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class LevelLoadProgressTracker extends Object implements LevelLoadListener {
    static compose(paramfirst: LevelLoadListener, paramsecond: LevelLoadListener): LevelLoadListener;
    constructor(includePlayerChunks: boolean)
    // private finalizedWeight: number;
    // private includePlayerChunks: boolean;
    // private progress: number;
    // private segmentFraction: number;
    // private segmentWeight: number;
    // private totalWeight: number;
    // private beginSegment(weight: number): void;
    finish(stage: LevelLoadListener$Stage): void;
    // private finishSegment(): void;
    get(): number;
    start(stage: LevelLoadListener$Stage, totalChunks: number): void;
    // private tracksStage(stage: LevelLoadListener$Stage): boolean;
    update(stage: LevelLoadListener$Stage, currentChunks: number, totalChunks: number): void;
    updateFocus(dimension: ResourceKey<Level>, chunkPos: ChunkPos): void;
    // private updateProgress(): void;
}
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ThreadedLevelLightEngine } from '../../../../../../net/minecraft/server/level/ThreadedLevelLightEngine.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { LevelChunk$UnsavedListener } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk$UnsavedListener.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class WorldGenContext extends Record {
    constructor(level: ServerLevel, generator: ChunkGenerator, structureManager: StructureTemplateManager, lightEngine: ThreadedLevelLightEngine, mainThreadExecutor: Executor, unsavedListener: (param0: ChunkPos) => void)
    // private generator: ChunkGenerator;
    // private level: ServerLevel;
    // private lightEngine: ThreadedLevelLightEngine;
    // private mainThreadExecutor: Executor;
    // private structureManager: StructureTemplateManager;
    // private unsavedListener: (param0: ChunkPos) => void;
    equals(o: Object | null): boolean;
    generator(): ChunkGenerator;
    hashCode(): number;
    level(): ServerLevel;
    lightEngine(): ThreadedLevelLightEngine;
    mainThreadExecutor(): Executor;
    structureManager(): StructureTemplateManager;
    toString(): string;
    unsavedListener(): (param0: ChunkPos) => void;
}
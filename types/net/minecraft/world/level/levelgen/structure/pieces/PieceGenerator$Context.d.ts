import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { WorldgenRandom } from '../../../../../../../net/minecraft/world/level/levelgen/WorldgenRandom.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class PieceGenerator$Context<C extends FeatureConfiguration> extends Record {
    // private chunkGenerator: ChunkGenerator;
    // private chunkPos: ChunkPos;
    // private config: C;
    // private heightAccessor: LevelHeightAccessor;
    // private random: WorldgenRandom;
    // private seed: number;
    // private structureTemplateManager: StructureTemplateManager;
    chunkGenerator(): ChunkGenerator;
    chunkPos(): ChunkPos;
    config(): C;
    equals(o: Object | null): boolean;
    hashCode(): number;
    heightAccessor(): LevelHeightAccessor;
    random(): WorldgenRandom;
    seed(): number;
    structureTemplateManager(): StructureTemplateManager;
    toString(): string;
}
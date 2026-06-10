import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { SequencedPriorityIterator } from '../../../../../../../net/minecraft/util/SequencedPriorityIterator.d.ts'
import type { LevelHeightAccessor } from '../../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { RandomState } from '../../../../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { PoolElementStructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/PoolElementStructurePiece.d.ts'
import type { JigsawPlacement$PieceState } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/JigsawPlacement$PieceState.d.ts'
import type { StructureTemplatePool } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasLookup } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasLookup.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { MutableObject } from '../../../../../../../org/apache/commons/lang3/mutable/MutableObject.d.ts'
export class JigsawPlacement$Placer extends Object {
    private constructor(pools: StructureTemplatePool[], maxDepth: number, chunkGenerator: ChunkGenerator, structureTemplateManager: StructureTemplateManager, pieces: PoolElementStructurePiece[], random: RandomSource)
    // private chunkGenerator: ChunkGenerator;
    // private maxDepth: number;
    // private pieces: PoolElementStructurePiece[];
    // private placing: SequencedPriorityIterator<JigsawPlacement$PieceState>;
    // private pools: StructureTemplatePool[];
    // private random: RandomSource;
    // private structureTemplateManager: StructureTemplateManager;
    // private tryPlacingChildren(sourcePiece: PoolElementStructurePiece, contextFree: MutableObject<VoxelShape>, depth: number, doExpansionHack: boolean, heightAccessor: LevelHeightAccessor, randomState: RandomState, poolAliasLookup: (param0: ResourceKey<StructureTemplatePool>) => ResourceKey<StructureTemplatePool>, liquidSettings: LiquidSettings): void;
}
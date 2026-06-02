import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelAccessor } from '../../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { EmptyPoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/EmptyPoolElement.d.ts'
import type { FeaturePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/FeaturePoolElement.d.ts'
import type { LegacySinglePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/LegacySinglePoolElement.d.ts'
import type { ListPoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/ListPoolElement.d.ts'
import type { SinglePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/SinglePoolElement.d.ts'
import type { StructurePoolElementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElementType.d.ts'
import type { StructureTemplatePool$Projection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool$Projection.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructureProcessorList } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorList.d.ts'
import type { StructureTemplate$JigsawBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$JigsawBlockInfo.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export abstract class StructurePoolElement extends Object {
    static CODEC: Codec<StructurePoolElement>;
    static empty(): (param0: StructureTemplatePool$Projection) => EmptyPoolElement;
    static feature(paramfeature: Holder<PlacedFeature>): (param0: StructureTemplatePool$Projection) => FeaturePoolElement;
    static legacy(paramlocation: string): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static legacy(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static list(paramelements: (Object | null)[]): (param0: StructureTemplatePool$Projection) => ListPoolElement;
    static single(paramlocation: string): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    constructor(projection: StructureTemplatePool$Projection)
    readonly projection: StructureTemplatePool$Projection;
    getBoundingBox(structureTemplateManager: StructureTemplateManager, position: BlockPos, rotation: Rotation): BoundingBox;
    getGroundLevelDelta(): number;
    getProjection(): StructureTemplatePool$Projection;
    getShuffledJigsawBlocks(structureTemplateManager: StructureTemplateManager, position: BlockPos, rotation: Rotation, random: RandomSource): StructureTemplate$JigsawBlockInfo[];
    getSize(structureTemplateManager: StructureTemplateManager, rotation: Rotation): Vec3i;
    getType(): StructurePoolElementType<Object>;
    handleDataMarker(level: LevelAccessor, dataMarker: StructureTemplate$StructureBlockInfo, position: BlockPos, rotation: Rotation, random: RandomSource, chunkBB: BoundingBox): void;
    place(structureTemplateManager: StructureTemplateManager, level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, position: BlockPos, referencePos: BlockPos, rotation: Rotation, chunkBB: BoundingBox, random: RandomSource, liquidSettings: LiquidSettings, keepJigsaws: boolean): boolean;
    setProjection(projection: StructureTemplatePool$Projection): StructurePoolElement;
}
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { EmptyPoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/EmptyPoolElement.d.ts'
import type { FeaturePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/FeaturePoolElement.d.ts'
import type { LegacySinglePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/LegacySinglePoolElement.d.ts'
import type { SinglePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/SinglePoolElement.d.ts'
import type { StructurePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElement.d.ts'
import type { StructurePoolElementType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElementType.d.ts'
import type { StructureTemplatePool$Projection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool$Projection.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructureProcessorList } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorList.d.ts'
import type { StructureTemplate$JigsawBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$JigsawBlockInfo.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class ListPoolElement extends StructurePoolElement {
    static CODEC: Codec<StructurePoolElement>;
    static CODEC: MapCodec<ListPoolElement>;
    static empty(): (param0: StructureTemplatePool$Projection) => EmptyPoolElement;
    static feature(paramfeature: Holder<PlacedFeature>): (param0: StructureTemplatePool$Projection) => FeaturePoolElement;
    static legacy(paramlocation: string): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static legacy(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => LegacySinglePoolElement;
    static list(paramelements: (param0: StructureTemplatePool$Projection) => StructurePoolElement[]): (param0: StructureTemplatePool$Projection) => ListPoolElement;
    static single(paramlocation: string): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramprocessors: Holder<StructureProcessorList>, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    static single(paramlocation: string, paramoverrideLiquidSettings: LiquidSettings): (param0: StructureTemplatePool$Projection) => SinglePoolElement;
    constructor(elements: StructurePoolElement[], projection: StructureTemplatePool$Projection)
    readonly elements: StructurePoolElement[];
    getBoundingBox(structureTemplateManager: StructureTemplateManager, position: BlockPos, rotation: Rotation): BoundingBox;
    getElements(): StructurePoolElement[];
    getShuffledJigsawBlocks(structureTemplateManager: StructureTemplateManager, position: BlockPos, rotation: Rotation, random: RandomSource): StructureTemplate$JigsawBlockInfo[];
    getSize(structureTemplateManager: StructureTemplateManager, rotation: Rotation): Vec3i;
    getType(): StructurePoolElementType<any>;
    place(structureTemplateManager: StructureTemplateManager, level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, position: BlockPos, referencePos: BlockPos, rotation: Rotation, chunkBB: BoundingBox, random: RandomSource, liquidSettings: LiquidSettings, keepJigsaws: boolean): boolean;
    setProjection(projection: StructureTemplatePool$Projection): StructurePoolElement;
    // private setProjectionOnEachElement(projection: StructureTemplatePool$Projection): void;
    toString(): string;
}
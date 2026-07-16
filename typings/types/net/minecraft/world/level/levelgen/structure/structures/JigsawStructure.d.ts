import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RecordCodecBuilder } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Heightmap$Types } from '../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { HeightProvider } from '../../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Structure$GenerationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$GenerationStub } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationStub.d.ts'
import type { Structure$StructureSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$StructureSettings.d.ts'
import type { StructureType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
import type { DimensionPadding } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/DimensionPadding.d.ts'
import type { StructureTemplatePool } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasBinding } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
import type { JigsawStructure$MaxDistance } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/JigsawStructure$MaxDistance.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
export class JigsawStructure extends Structure {
    static CODEC: MapCodec<JigsawStructure>;
    static DEFAULT_DIMENSION_PADDING: DimensionPadding;
    static DEFAULT_LIQUID_SETTINGS: LiquidSettings;
    static DIRECT_CODEC: Codec<Structure>;
    static MAX_DEPTH: number;
    static MAX_TOTAL_STRUCTURE_RANGE: number;
    static MIN_DEPTH: number;
    static getMeanFirstOccupiedHeight(paramcontext: Structure$GenerationContext, paramminX: number, paramsizeX: number, paramminZ: number, paramsizeZ: number): number;
    static settingsCodec(parami: RecordCodecBuilder$Instance<Structure>): RecordCodecBuilder<Structure, Structure$StructureSettings>;
    static simpleCodec(paramconstructor: (param0: Structure$StructureSettings) => Structure | null): MapCodec<Structure>;
    constructor(settings: Structure$StructureSettings, startPool: Holder<StructureTemplatePool>, startJigsawName: Optional<Identifier>, maxDepth: number, startHeight: HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: Optional<Heightmap$Types>, maxDistanceFromCenter: JigsawStructure$MaxDistance, poolAliases: PoolAliasBinding[], dimensionPadding: DimensionPadding, liquidSettings: LiquidSettings)
    constructor(settings: Structure$StructureSettings, startPool: Holder<StructureTemplatePool>, maxDepth: number, startHeight: HeightProvider, useExpansionHack: boolean)
    constructor(settings: Structure$StructureSettings, startPool: Holder<StructureTemplatePool>, maxDepth: number, startHeight: HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: Heightmap$Types)
    // private dimensionPadding: DimensionPadding;
    // private liquidSettings: LiquidSettings;
    // private maxDepth: number;
    // private maxDistanceFromCenter: JigsawStructure$MaxDistance;
    readonly poolAliases: PoolAliasBinding[];
    // private projectStartToHeightmap: Optional<Heightmap$Types>;
    // private startHeight: HeightProvider;
    // private startJigsawName: Optional<Identifier>;
    readonly startPool: Holder<StructureTemplatePool>;
    // private useExpansionHack: boolean;
    findGenerationPoint(context: Structure$GenerationContext): Optional<Structure$GenerationStub>;
    getPoolAliases(): PoolAliasBinding[];
    getStartPool(): Holder<StructureTemplatePool>;
    type(): StructureType<any>;
}
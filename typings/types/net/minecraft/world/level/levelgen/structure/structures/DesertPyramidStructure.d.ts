import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RecordCodecBuilder } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { SinglePieceStructure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/SinglePieceStructure.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Structure$GenerationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$StructureSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure$StructureSettings.d.ts'
import type { StructureType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
import type { PiecesContainer } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PiecesContainer.d.ts'
export class DesertPyramidStructure extends SinglePieceStructure {
    static CODEC: Codec<Holder<Structure>>;
    static CODEC: MapCodec<DesertPyramidStructure>;
    static DIRECT_CODEC: Codec<Structure>;
    static getMeanFirstOccupiedHeight(paramcontext: Structure$GenerationContext, paramminX: number, paramsizeX: number, paramminZ: number, paramsizeZ: number): number;
    static settingsCodec(parami: RecordCodecBuilder$Instance<Structure>): RecordCodecBuilder<Structure, Structure$StructureSettings>;
    static simpleCodec(paramconstructor: (param0: Structure$StructureSettings) => Structure | null): MapCodec<Structure>;
    constructor(settings: Structure$StructureSettings)
    afterPlace(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, pieces: PiecesContainer): void;
    type(): StructureType<any>;
}
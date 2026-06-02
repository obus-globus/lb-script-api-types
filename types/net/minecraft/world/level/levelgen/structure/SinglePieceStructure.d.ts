import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RecordCodecBuilder } from '../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WorldgenRandom } from '../../../../../../net/minecraft/world/level/levelgen/WorldgenRandom.d.ts'
import type { SinglePieceStructure$PieceConstructor } from '../../../../../../net/minecraft/world/level/levelgen/structure/SinglePieceStructure$PieceConstructor.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Structure$GenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationContext.d.ts'
import type { Structure$GenerationStub } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$GenerationStub.d.ts'
import type { Structure$StructureSettings } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure$StructureSettings.d.ts'
import type { StructurePiecesBuilder } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePiecesBuilder.d.ts'
export abstract class SinglePieceStructure extends Structure {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<Structure>;
    static getMeanFirstOccupiedHeight(paramcontext: Structure$GenerationContext, paramminX: number, paramsizeX: number, paramminZ: number, paramsizeZ: number): number;
    static settingsCodec(parami: RecordCodecBuilder$Instance<Object>): RecordCodecBuilder<Object, Structure$StructureSettings>;
    static simpleCodec(paramconstructor: (param0: Structure$StructureSettings) => Object | null): MapCodec<Object>;
    constructor(constructor: (param0: WorldgenRandom, param1: number, param2: number) => net.minecraft.world.level.levelgen.structure.StructurePiece, width: number, depth: number, settings: Structure$StructureSettings)
    // private constructor: (param0: WorldgenRandom, param1: number, param2: number) => net.minecraft.world.level.levelgen.structure.StructurePiece;
    // private depth: number;
    // private width: number;
    findGenerationPoint(context: Structure$GenerationContext): Optional<Structure$GenerationStub>;
    // private generatePieces(builder: StructurePiecesBuilder, context: Structure$GenerationContext): void;
}
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StrongholdPieces$StrongholdPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$StrongholdPiece.d.ts'
export class StrongholdPieces$FiveCrossing extends StrongholdPieces$StrongholdPiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static createPiece(paramstructurePieceAccessor: StructurePieceAccessor, paramrandom: RandomSource, paramfootX: number, paramfootY: number, paramfootZ: number, paramdirection: Direction, paramgenDepth: number): StrongholdPieces$FiveCrossing;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(genDepth: number, random: RandomSource, boundingBox: BoundingBox, direction: Direction)
    constructor(tag: CompoundTag)
    // private leftHigh: boolean;
    // private leftLow: boolean;
    // private rightHigh: boolean;
    // private rightLow: boolean;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    addChildren(startPiece: StructurePiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
}
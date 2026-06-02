import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { Structure } from '../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { PiecesContainer } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PiecesContainer.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
export class StructureStart extends Object {
    static INVALID_START: StructureStart;
    static INVALID_START_ID: string;
    static loadStaticStart(paramcontext: StructurePieceSerializationContext, paramtag: CompoundTag, paramseed: number): StructureStart;
    constructor(structure: Structure, chunkPos: ChunkPos, references: number, pieceContainer: PiecesContainer)
    // private cachedBoundingBox: BoundingBox;
    readonly chunkPos: ChunkPos;
    // private pieceContainer: PiecesContainer;
    readonly references: number;
    readonly structure: Structure;
    addReference(): void;
    canBeReferenced(): boolean;
    createTag(context: StructurePieceSerializationContext, chunkPos: ChunkPos): CompoundTag;
    getBoundingBox(): BoundingBox;
    getChunkPos(): ChunkPos;
    getMaxReferences(): number;
    getPieces(): StructurePiece[];
    getReferences(): number;
    getStructure(): Structure;
    isValid(): boolean;
    placeInChunk(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos): void;
}
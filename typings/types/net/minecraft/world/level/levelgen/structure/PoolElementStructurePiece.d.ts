import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { JigsawJunction } from '../../../../../../net/minecraft/world/level/levelgen/structure/pools/JigsawJunction.d.ts'
import type { StructurePoolElement } from '../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElement.d.ts'
import type { LiquidSettings } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class PoolElementStructurePiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(context: StructurePieceSerializationContext, tag: CompoundTag)
    constructor(structureTemplateManager: StructureTemplateManager, element: StructurePoolElement, position: BlockPos, groundLevelDelta: number, rotation: Rotation, boundingBox: BoundingBox, liquidSettings: LiquidSettings)
    readonly element: StructurePoolElement;
    readonly groundLevelDelta: number;
    readonly junctions: JigsawJunction[];
    // private liquidSettings: LiquidSettings;
    position: BlockPos;
    readonly rotation: Rotation;
    // private structureTemplateManager: StructureTemplateManager;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    addJunction(junction: JigsawJunction): void;
    getElement(): StructurePoolElement;
    getGroundLevelDelta(): number;
    getJunctions(): JigsawJunction[];
    getPosition(): BlockPos;
    getRotation(): Rotation;
    move(dx: number, dy: number, dz: number): void;
    place(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, referencePos: BlockPos, keepJigsaws: boolean): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
    toString(): string;
}
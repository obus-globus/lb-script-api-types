import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { TemplateStructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/TemplateStructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { OceanRuinStructure$Type } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanRuinStructure$Type.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class OceanRuinPieces$OceanRuinPiece extends TemplateStructurePiece {
    static create(paramstructureTemplateManager: StructureTemplateManager, paramtag: CompoundTag): OceanRuinPieces$OceanRuinPiece;
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(structureTemplateManager: StructureTemplateManager, templateLocation: Identifier, position: BlockPos, rotation: Rotation, integrity: number, biomeType: OceanRuinStructure$Type, isLarge: boolean)
    // private biomeType: OceanRuinStructure$Type;
    // private integrity: number;
    // private isLarge: boolean;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    // private getHeight(pos: BlockPos, level: BlockGetter, corner: BlockPos): number;
    handleDataMarker(markerId: string, position: BlockPos, level: ServerLevelAccessor, random: RandomSource, chunkBB: BoundingBox): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
}
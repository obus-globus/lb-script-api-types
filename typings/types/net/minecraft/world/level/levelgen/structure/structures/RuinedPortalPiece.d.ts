import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelAccessor } from '../../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Mirror } from '../../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { Heightmap$Types } from '../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { TemplateStructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/TemplateStructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { RuinedPortalPiece$Properties } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/RuinedPortalPiece$Properties.d.ts'
import type { RuinedPortalPiece$VerticalPlacement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/RuinedPortalPiece$VerticalPlacement.d.ts'
import type { StructureTemplate } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class RuinedPortalPiece extends TemplateStructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static getHeightMapType(paramverticalPlacement: RuinedPortalPiece$VerticalPlacement): Heightmap$Types;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(structureTemplateManager: StructureTemplateManager, templatePosition: BlockPos, verticalPlacement: RuinedPortalPiece$VerticalPlacement, properties: RuinedPortalPiece$Properties, templateLocation: Identifier, template: StructureTemplate, rotation: Rotation, mirror: Mirror, pivot: BlockPos)
    constructor(structureTemplateManager: StructureTemplateManager, tag: CompoundTag)
    // private properties: RuinedPortalPiece$Properties;
    // private verticalPlacement: RuinedPortalPiece$VerticalPlacement;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    // private addNetherrackDripColumn(random: RandomSource, level: LevelAccessor, pos: BlockPos): void;
    // private addNetherrackDripColumnsBelowPortal(random: RandomSource, level: LevelAccessor): void;
    // private canBlockBeReplacedByNetherrackOrMagma(level: LevelAccessor, pos: BlockPos): boolean;
    handleDataMarker(markerId: string, pos: BlockPos, level: ServerLevelAccessor, random: RandomSource, chunkBB: BoundingBox): void;
    // private maybeAddLeavesAbove(random: RandomSource, level: LevelAccessor, pos: BlockPos): void;
    // private maybeAddVines(random: RandomSource, level: LevelAccessor, pos: BlockPos): void;
    // private placeNetherrackOrMagma(random: RandomSource, level: LevelAccessor, pos: BlockPos): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
    // private spreadNetherrack(random: RandomSource, level: LevelAccessor): void;
}
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { StructurePlaceSettings } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureTemplate } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { StructureTemplateManager } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export abstract class TemplateStructurePiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, genDepth: number, structureTemplateManager: StructureTemplateManager, templateLocation: Identifier, templateName: string, placeSettings: StructurePlaceSettings, position: BlockPos)
    constructor(type: StructurePieceType, tag: CompoundTag, structureTemplateManager: StructureTemplateManager, structurePlaceSettingsSupplier: (param0: Identifier) => StructurePlaceSettings)
    // private placeSettings: StructurePlaceSettings;
    // private template: StructureTemplate;
    // private templateName: string;
    // private templatePosition: BlockPos;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    getRotation(): Rotation;
    handleDataMarker(markerId: string, position: BlockPos, level: ServerLevelAccessor, random: RandomSource, chunkBB: BoundingBox): void;
    makeTemplateLocation(): Identifier;
    move(dx: number, dy: number, dz: number): void;
    placeSettings(): StructurePlaceSettings;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
    template(): StructureTemplate;
    templatePosition(): BlockPos;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderGetter } from '../../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Vec3i } from '../../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ProblemReporter } from '../../../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { JigsawBlockEntity$JointType } from '../../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity$JointType.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePlaceSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructurePlaceSettings.d.ts'
import type { StructureTemplate$JigsawBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$JigsawBlockInfo.d.ts'
import type { StructureTemplate$Palette } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$Palette.d.ts'
import type { StructureTemplate$StructureBlockInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureBlockInfo.d.ts'
import type { StructureTemplate$StructureEntityInfo } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$StructureEntityInfo.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { DiscreteVoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/DiscreteVoxelShape.d.ts'
export class StructureTemplate extends Object {
    static BLOCKS_TAG: string;
    static BLOCK_TAG_NBT: string;
    static BLOCK_TAG_POS: string;
    static BLOCK_TAG_STATE: string;
    static ENTITIES_TAG: string;
    static ENTITY_TAG_BLOCKPOS: string;
    static ENTITY_TAG_NBT: string;
    static ENTITY_TAG_POS: string;
    static PALETTE_LIST_TAG: string;
    static PALETTE_TAG: string;
    static SIZE_TAG: string;
    static calculateRelativePosition(paramsettings: StructurePlaceSettings, parampos: BlockPos): BlockPos;
    static getDefaultJointType(paramstate: BlockState): JigsawBlockEntity$JointType;
    static getJointType(paramnbt: CompoundTag, paramstate: BlockState): JigsawBlockEntity$JointType;
    static getZeroPositionWithTransform(paramzeroPos: BlockPos, parammirror: Mirror, paramrotation: Rotation, paramsizeX: number, paramsizeZ: number): BlockPos;
    static processBlockInfos(paramlevel: ServerLevelAccessor, paramposition: BlockPos, paramreferencePos: BlockPos, paramsettings: StructurePlaceSettings, paramblockInfoList: StructureTemplate$StructureBlockInfo[]): StructureTemplate$StructureBlockInfo[];
    static transform(parampos: BlockPos, parammirror: Mirror, paramrotation: Rotation, parampivot: BlockPos): BlockPos;
    static transform(parampos: Vec3, parammirror: Mirror, paramrotation: Rotation, parampivot: BlockPos): Vec3;
    static updateShapeAtEdge(paramlevel: LevelAccessor, paramupdateMode: number, paramshape: DiscreteVoxelShape, paramstartX: number, paramstartY: number, paramstartZ: number): void;
    static updateShapeAtEdge(paramlevel: LevelAccessor, paramupdateMode: number, paramshape: DiscreteVoxelShape, parampos: BlockPos): void;
    constructor()
    readonly author: string;
    // private entityInfoList: StructureTemplate$StructureEntityInfo[];
    // private palettes: StructureTemplate$Palette[];
    readonly size: Vec3i;
    calculateConnectedPosition(settings1: StructurePlaceSettings, connection1: BlockPos, settings2: StructurePlaceSettings, connection2: BlockPos): BlockPos;
    // private fillEntityList(level: Level, minCorner: BlockPos, maxCorner: BlockPos, reporter: ProblemReporter): void;
    fillFromWorld(level: Level, position: BlockPos, size: Vec3i, inludeEntities: boolean, ignoreBlocks: Block[]): void;
    filterBlocks(position: BlockPos, settings: StructurePlaceSettings, block: Block): StructureTemplate$StructureBlockInfo[];
    filterBlocks(position: BlockPos, settings: StructurePlaceSettings, block: Block, absolute: boolean): StructureTemplate$StructureBlockInfo[];
    getAuthor(): string;
    getBoundingBox(position: BlockPos, rotation: Rotation, pivot: BlockPos, mirror: Mirror): BoundingBox;
    getBoundingBox(settings: StructurePlaceSettings, position: BlockPos): BoundingBox;
    getJigsaws(position: BlockPos, rotation: Rotation): StructureTemplate$JigsawBlockInfo[];
    getSize(): Vec3i;
    getSize(rotation: Rotation): Vec3i;
    getZeroPositionWithTransform(zeroPos: BlockPos, mirror: Mirror, rotation: Rotation): BlockPos;
    load(blockLookup: HolderGetter<Block>, tag: CompoundTag): void;
    // private loadPalette(blockLookup: HolderGetter<Block>, paletteList: (Object | null)[], blockList: (Object | null)[]): void;
    // private newDoubleList(...values: number[]): (Object | null)[];
    // private newIntegerList(...values: number[]): (Object | null)[];
    // private placeEntities(level: ServerLevelAccessor, position: BlockPos, mirror: Mirror, rotation: Rotation, pivot: BlockPos, boundingBox: BoundingBox, finalizeEntities: boolean, problemReporter: ProblemReporter): void;
    placeInWorld(level: ServerLevelAccessor, position: BlockPos, referencePos: BlockPos, settings: StructurePlaceSettings, random: RandomSource, updateMode: number): boolean;
    save(tag: CompoundTag): CompoundTag;
    setAuthor(author: string): void;
}
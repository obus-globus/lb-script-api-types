import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BoundingBoxRenderable } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable.d.ts'
import type { BoundingBoxRenderable$Mode } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$Mode.d.ts'
import type { BoundingBoxRenderable$RenderableBox } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$RenderableBox.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StructureMode } from '../../../../../../net/minecraft/world/level/block/state/properties/StructureMode.d.ts'
import type { StructureTemplate } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class StructureBlockEntity extends BlockEntity implements BoundingBoxRenderable {
    static AUTHOR_TAG: string;
    static MAX_OFFSET_PER_AXIS: number;
    static MAX_SIZE_PER_AXIS: number;
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static createRandom(paramseed: number): RandomSource;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static saveStructure(paramlevel: ServerLevel, paramstructureName: Identifier, parampos: BlockPos, paramstructureSize: Vec3i, paramignoreEntities: boolean, paramauthor: string, paramsaveToDisk: boolean, paramignoreBlocks: Block[]): boolean;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private author: string;
    readonly ignoreEntities: boolean;
    readonly integrity: number;
    readonly metaData: string;
    readonly mirror: Mirror;
    readonly mode: StructureMode;
    readonly powered: boolean;
    readonly rotation: Rotation;
    readonly seed: number;
    readonly showAir: boolean;
    readonly showBoundingBox: boolean;
    readonly strict: boolean;
    readonly structureName: Identifier;
    readonly structurePos: BlockPos;
    readonly structureSize: Vec3i;
    createdBy(creator: LivingEntity): void;
    detectSize(): boolean;
    getIntegrity(): number;
    getMetaData(): string;
    getMirror(): Mirror;
    getMode(): StructureMode;
    // private getRelatedCorners(corner1: BlockPos, corner2: BlockPos): Stream<BlockPos>;
    getRenderableBox(): BoundingBoxRenderable$RenderableBox;
    getRotation(): Rotation;
    getSeed(): number;
    getShowAir(): boolean;
    getShowBoundingBox(): boolean;
    getStructureName(): string;
    getStructurePos(): BlockPos;
    getStructureSize(): Vec3i;
    // private getStructureTemplate(level: ServerLevel): StructureTemplate;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    hasStructureName(): boolean;
    isIgnoreEntities(): boolean;
    isPowered(): boolean;
    isStrict(): boolean;
    isStructureLoadable(): boolean;
    loadAdditional(input: ValueInput): void;
    loadStructureInfo(level: ServerLevel): boolean;
    // private loadStructureInfo(structureTemplate: StructureTemplate): void;
    placeStructure(level: ServerLevel): void;
    // private placeStructure(level: ServerLevel, template: StructureTemplate): void;
    placeStructureIfSameSize(level: ServerLevel): boolean;
    renderMode(): BoundingBoxRenderable$Mode;
    saveAdditional(output: ValueOutput): void;
    saveStructure(): boolean;
    saveStructure(saveToDisk: boolean): boolean;
    setIgnoreEntities(ignoreEntities: boolean): void;
    setIntegrity(integrity: number): void;
    setMetaData(metaData: string): void;
    setMirror(mirror: Mirror): void;
    setMode(mode: StructureMode): void;
    setPowered(powered: boolean): void;
    setRotation(rotation: Rotation): void;
    setSeed(seed: number): void;
    setShowAir(showAir: boolean): void;
    setShowBoundingBox(showBoundingBox: boolean): void;
    setStrict(strict: boolean): void;
    setStructureName(structureName: string): void;
    setStructureName(structureName: Identifier): void;
    setStructurePos(structurePos: BlockPos): void;
    setStructureSize(structureSize: Vec3i): void;
    unloadStructure(): void;
    // private updateBlockState(): void;
    usedBy(player: Player): boolean;
}
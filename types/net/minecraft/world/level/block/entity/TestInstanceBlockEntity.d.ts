import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { GameTestInstance } from '../../../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BeaconBeamOwner } from '../../../../../../net/minecraft/world/level/block/entity/BeaconBeamOwner.d.ts'
import type { BeaconBeamOwner$Section } from '../../../../../../net/minecraft/world/level/block/entity/BeaconBeamOwner$Section.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BoundingBoxRenderable } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable.d.ts'
import type { BoundingBoxRenderable$Mode } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$Mode.d.ts'
import type { BoundingBoxRenderable$RenderableBox } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$RenderableBox.d.ts'
import type { TestInstanceBlockEntity$Data } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$Data.d.ts'
import type { TestInstanceBlockEntity$ErrorMarker } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$ErrorMarker.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructureTemplate } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class TestInstanceBlockEntity extends BlockEntity implements BeaconBeamOwner, BoundingBoxRenderable {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static export(paramlevel: ServerLevel, paramstructureId: Identifier, paramfeedbackOutput: (param0: Component) => void): boolean;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static getStructurePos(paramblockPos: BlockPos): BlockPos;
    static getStructureSize(paramlevel: ServerLevel, paramtestKey: ResourceKey<GameTestInstance>): Optional<Vec3i>;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private data: TestInstanceBlockEntity$Data;
    readonly errorMarkers: TestInstanceBlockEntity$ErrorMarker[];
    clearErrorMarkers(): void;
    encaseStructure(): void;
    errorMessage(): Optional<Component>;
    exportTest(feedbackOutput: (param0: Component) => void): boolean;
    // private forceLoadChunks(): void;
    getBeamSections(): BeaconBeamOwner$Section[];
    getErrorMarkers(): TestInstanceBlockEntity$ErrorMarker[];
    // private getPadding(): number;
    getRenderableBox(): BoundingBoxRenderable$RenderableBox;
    getRotation(): Rotation;
    getSize(): Vec3i;
    getStartCorner(): BlockPos;
    getStructureBoundingBox(): BoundingBox;
    getStructureBounds(): AABB;
    getStructurePos(): BlockPos;
    getTestBoundingBox(): BoundingBox;
    getTestBounds(): AABB;
    // private getTestHolder(): Optional<Holder$Reference<GameTestInstance>>;
    getTestName(): Component;
    // private getTransformedSize(): Vec3i;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    ignoreEntities(): boolean;
    loadAdditional(input: ValueInput): void;
    markError(pos: BlockPos, text: Component): void;
    placeStructure(): boolean;
    // private placeStructure(level: ServerLevel, template: StructureTemplate): void;
    processStructureBoundary(action: (param0: BlockPos) => void): void;
    removeBarriers(): void;
    // private removeEntities(): void;
    renderMode(): BoundingBoxRenderable$Mode;
    resetTest(feedbackOutput: (param0: Component) => void): void;
    runTest(feedbackOutput: (param0: Component) => void): void;
    saveAdditional(output: ValueOutput): void;
    saveTest(feedbackOutput: (param0: Component) => void): Optional<Identifier>;
    set(data: TestInstanceBlockEntity$Data): void;
    setChanged(): void;
    setErrorMessage(errorMessage: Component): void;
    setRunning(): void;
    setSuccess(): void;
    test(): Optional<ResourceKey<GameTestInstance>>;
}
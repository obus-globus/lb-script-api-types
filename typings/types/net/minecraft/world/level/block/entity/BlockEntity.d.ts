import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SetBlockStateHandlingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SetBlockStateHandlingBlockEntity.d.ts'
import type { SetChangedHandlingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SetChangedHandlingBlockEntity.d.ts'
import type { ComparatorTracker } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking/ComparatorTracker.d.ts'
import type { SupportCache } from '../../../../../../net/caffeinemc/mods/lithium/common/world/blockentity/SupportCache.d.ts'
import type { AttachmentTarget } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { RenderDataBlockEntity } from '../../../../../../net/fabricmc/fabric/api/blockgetter/v2/RenderDataBlockEntity.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AttachmentTargetImpl } from '../../../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { CrashReportCategory } from '../../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentPatch } from '../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { TypedDataComponent } from '../../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { DebugValueSource } from '../../../../../../net/minecraft/util/debug/DebugValueSource.d.ts'
import type { DebugValueSource$Registration } from '../../../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export abstract class BlockEntity extends Object implements SetBlockStateHandlingBlockEntity, SetChangedHandlingBlockEntity, ComparatorTracker, SupportCache, AttachmentTarget, RenderDataBlockEntity, AttachmentTargetImpl, TypedInstance<BlockEntityType<Object>>, DebugValueSource {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static transfer(paramarg0: AttachmentTarget, paramarg1: AttachmentTarget, paramarg2: boolean): void;
    constructor(type: BlockEntityType<Object>, worldPosition: BlockPos, blockState: BlockState)
    // private attachedChangedListeners: Map<Object, Object>;
    readonly blockState: BlockState;
    // private dataAttachments: Map<Object, Object>;
    // private deferredSyncedAttachments: (Object | null)[];
    // private hasComparators: number;
    level: Level;
    // private remove: boolean;
    // private supportTestResult: boolean;
    // private syncedAttachments: Map<Object, Object>;
    readonly type: BlockEntityType<Object>;
    // private worldPosition: BlockPos;
    // private acknowledgeSynced(arg0: AttachmentType<Object>, arg1: Object): void;
    // private acknowledgeSyncedEntry(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    applyComponents(prototype: TypedDataComponent<Object>[], patch: DataComponentPatch): void;
    applyComponentsFromItemStack(stack: ItemStack): void;
    applyImplicitComponents(components: DataComponentGetter): void;
    clearRemoved(): void;
    collectComponents(): TypedDataComponent<Object>[];
    collectImplicitComponents(components: DataComponentMap$Builder): void;
    components(): TypedDataComponent<Object>[];
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getAttachments(): Map<Object | null, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: (Object | null)[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends Object | number | string | boolean>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<Object>, arg1: AttachmentTargetInfo<Object>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillCrashReportCategory(category: CrashReportCategory): void;
    getAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttached(arg0: AttachmentType<Object>): Object;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getBlockPos(): BlockPos;
    getBlockState(): BlockState;
    getLevel(): Level;
    getNameForReporting(): string;
    getRenderData(): Object;
    getType(): BlockEntityType<Object>;
    getUpdatePacket(): Packet<ClientGamePacketListener>;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    hasLevel(): boolean;
    is(rawType: BlockEntityType<Object>): boolean;
    is(type: Holder<BlockEntityType<Object>>): boolean;
    is(set: Holder<BlockEntityType<Object>>[]): boolean;
    is(type: ResourceKey<BlockEntityType<Object>>): boolean;
    is(tag: TagKey<BlockEntityType<Object>>): boolean;
    isRemoved(): boolean;
    isValidBlockState(blockState: BlockState): boolean;
    lithium$handleSetBlockState(): void;
    lithium$handleSetChanged(): void;
    lithium$hasAnyComparatorNearby(): boolean;
    lithium$isSupported(): boolean;
    lithium$onComparatorAdded(arg0: Direction, arg1: number): void;
    loadAdditional(input: ValueInput): void;
    loadCustomOnly(input: ValueInput): void;
    loadWithComponents(input: ValueInput): void;
    modifyAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: (param0: A) => Object | null): A;
    onAttachedSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    onAttachedSet(arg0: AttachmentType<Object>): Event<Object>;
    preRemoveSideEffects(pos: BlockPos, state: BlockState): void;
    problemPath(): () => string;
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
    removeAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    removeComponentsFromTag(output: ValueOutput): void;
    saveAdditional(output: ValueOutput): void;
    saveCustomOnly(registries: HolderLookup$Provider): CompoundTag;
    saveCustomOnly(output: ValueOutput): void;
    // private saveId(output: ValueOutput): void;
    saveMetadata(output: ValueOutput): void;
    saveWithFullMetadata(registries: HolderLookup$Provider): CompoundTag;
    saveWithFullMetadata(output: ValueOutput): void;
    saveWithId(output: ValueOutput): void;
    saveWithoutMetadata(registries: HolderLookup$Provider): CompoundTag;
    saveWithoutMetadata(output: ValueOutput): void;
    setAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
    setBlockState(blockState: BlockState): void;
    setChanged(): void;
    setComponents(components: TypedDataComponent<Object>[]): void;
    setLevel(level: Level): void;
    setRemoved(): void;
    tags(): Stream<TagKey<BlockEntityType<Object>>>;
    triggerEvent(b0: number, b1: number): boolean;
    typeHolder(): Holder<BlockEntityType<Object>>;
    // private validateBlockState(blockState: BlockState): void;
}
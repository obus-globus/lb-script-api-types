import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LockCode } from '../../../../../../net/minecraft/world/LockCode.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { Nameable } from '../../../../../../net/minecraft/world/Nameable.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerData } from '../../../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BeaconBeamOwner } from '../../../../../../net/minecraft/world/level/block/entity/BeaconBeamOwner.d.ts'
import type { BeaconBeamOwner$Section } from '../../../../../../net/minecraft/world/level/block/entity/BeaconBeamOwner$Section.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class BeaconBlockEntity extends BlockEntity implements MenuProvider, Nameable, BeaconBeamOwner {
    static BEACON_EFFECTS: Holder<MobEffect>[][];
    static DATA_LEVELS: number;
    static DATA_PRIMARY: number;
    static DATA_SECONDARY: number;
    static NBT_ATTACHMENT_KEY: string;
    static NUM_DATA_VALUES: number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static playSound(paramlevel: Level, paramworldPosition: BlockPos, paramevent: SoundEvent): void;
    static tick(paramlevel: Level, parampos: BlockPos, paramselfState: BlockState, paramentity: BeaconBlockEntity): void;
    static validateEffects(paramprimary: Holder<MobEffect>, paramsecondary: Holder<MobEffect>, paramlevels: number): boolean;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly beamSections: BeaconBeamOwner$Section[];
    // private checkingBeamSections: BeaconBeamOwner$Section[];
    // private dataAccess: ContainerData;
    // private lastCheckY: number;
    // private levels: number;
    // private lockKey: LockCode;
    readonly name: Component;
    // private primaryPower: Holder<MobEffect>;
    // private secondaryPower: Holder<MobEffect>;
    applyImplicitComponents(components: DataComponentGetter): void;
    collectImplicitComponents(components: DataComponentMap$Builder): void;
    createMenu(containerId: number, inventory: (Object | null)[], player: Player): AbstractContainerMenu;
    getBeamSections(): BeaconBeamOwner$Section[];
    getCustomName(): Component;
    getDisplayName(): Component;
    getName(): Component;
    getPlainTextName(): string;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    hasCustomName(): boolean;
    loadAdditional(input: ValueInput): void;
    removeComponentsFromTag(output: ValueOutput): void;
    saveAdditional(output: ValueOutput): void;
    setCustomName(name: Component): void;
    setLevel(level: Level): void;
    setRemoved(): void;
}
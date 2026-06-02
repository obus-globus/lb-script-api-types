import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DebugValueSource$Registration } from '../../../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BeehiveBlockEntity$BeeData } from '../../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity$BeeData.d.ts'
import type { BeehiveBlockEntity$BeeReleaseStatus } from '../../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity$BeeReleaseStatus.d.ts'
import type { BeehiveBlockEntity$Occupant } from '../../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity$Occupant.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class BeehiveBlockEntity extends BlockEntity {
    static MAX_OCCUPANTS: number;
    static MIN_OCCUPATION_TICKS_NECTARLESS: number;
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getHoneyLevel(paramblockState: BlockState): number;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static serverTick(paramlevel: Level, paramblockPos: BlockPos, paramstate: BlockState, paramentity: BeehiveBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private savedFlowerPos: BlockPos;
    // private stored: BeehiveBlockEntity$BeeData[];
    addOccupant(bee: Bee): void;
    applyImplicitComponents(components: DataComponentGetter): void;
    collectImplicitComponents(components: DataComponentMap$Builder): void;
    emptyAllLivingFromHive(player: Player, state: BlockState, releaseReason: BeehiveBlockEntity$BeeReleaseStatus): void;
    // private getBees(): BeehiveBlockEntity$Occupant[];
    getOccupantCount(): number;
    // private hasSavedFlowerPos(): boolean;
    isEmpty(): boolean;
    isFireNearby(): boolean;
    isFull(): boolean;
    isSedated(): boolean;
    loadAdditional(input: ValueInput): void;
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
    // private releaseAllOccupants(state: BlockState, releaseStatus: BeehiveBlockEntity$BeeReleaseStatus): Entity[];
    removeComponentsFromTag(output: ValueOutput): void;
    saveAdditional(output: ValueOutput): void;
    setChanged(): void;
    storeBee(occupant: BeehiveBlockEntity$Occupant): void;
}
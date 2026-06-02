import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { TypedEntityData } from '../../../../../../net/minecraft/world/item/component/TypedEntityData.d.ts'
import type { BaseSpawner } from '../../../../../../net/minecraft/world/level/BaseSpawner.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Spawner } from '../../../../../../net/minecraft/world/level/Spawner.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SpawnerBlockEntity extends BlockEntity implements Spawner {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static appendHoverText(paramdata: TypedEntityData<Object>, paramconsumer: (param0: Component) => void, paramnextSpawnDataTagKey: string): void;
    static clientTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: SpawnerBlockEntity): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static getSpawnEntityDisplayName(paramdata: TypedEntityData<Object>, paramnextSpawnDataTagKey: string): Component;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static serverTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: SpawnerBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly spawner: BaseSpawner;
    getSpawner(): BaseSpawner;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setEntityId(type: EntityType<Object>, random: RandomSource): void;
    triggerEvent(b0: number, b1: number): boolean;
}
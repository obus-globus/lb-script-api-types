import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemInstance } from '../../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class BrushableBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private brushCount: number;
    // private brushCountResetsAtTick: number;
    // private coolDownEndsAtTick: number;
    readonly hitDirection: Direction;
    readonly item: ItemStack;
    // private lootTable: ResourceKey<LootTable>;
    // private lootTableSeed: number;
    brush(gameTime: number, level: ServerLevel, user: LivingEntity, direction: Direction, brush: ItemStack): boolean;
    // private brushingCompleted(level: ServerLevel, user: LivingEntity, brush: ItemStack): void;
    checkReset(level: ServerLevel): void;
    // private dropContent(level: ServerLevel, user: LivingEntity, brush: ItemStack): void;
    // private getCompletionState(): number;
    getHitDirection(): Direction;
    getItem(): ItemStack;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setLootTable(lootTable: ResourceKey<LootTable>, seed: number): void;
    // private tryLoadLootTable(input: ValueInput): boolean;
    // private trySaveLootTable(base: ValueOutput): boolean;
    // private unpackLootTable(level: ServerLevel, user: LivingEntity, brush: ItemInstance): void;
}
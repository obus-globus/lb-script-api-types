import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemEntity } from '../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class HopperBlockEntity {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_DISTANCE_BUFFER: number;
    static HOPPER_CONTAINER_SIZE: number;
    static LOOT_TABLE_SEED_TAG: string;
    static LOOT_TABLE_TAG: string;
    static MOVE_ITEM_SPEED: number;
    static NBT_ATTACHMENT_KEY: string;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static SUCK_AABB: AABB;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static addItem(paramcontainer: ItemStack[], paramentity: ItemEntity): boolean;
    static addItem(paramfrom: ItemStack[], paramcontainer: ItemStack[], paramitemStack: ItemStack, paramdirection: Direction): ItemStack;
    static entityInside(paramlevel: Level, parampos: BlockPos, paramblockState: BlockState, paramentity: Entity, paramhopper: (Object | null)[]): void;
    static getContainerAt(paramlevel: Level, parampos: BlockPos): ItemStack[];
    static getItemsAtAndAbove(paramlevel: Level, paramhopper: (Object | null)[]): ItemEntity[];
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static pushItemsTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: (Object | null)[]): void;
    static sendChestLockedNotifications(parampos: Vec3, paramplayer: Player, paramdisplayName: Component): void;
    static suckInItems(paramlevel: Level, paramhopper: (Object | null)[]): boolean;
}
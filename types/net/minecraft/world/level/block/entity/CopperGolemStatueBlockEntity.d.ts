import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { CopperGolem } from '../../../../../../net/minecraft/world/entity/animal/golem/CopperGolem.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { CopperGolemStatueBlock$Pose } from '../../../../../../net/minecraft/world/level/block/CopperGolemStatueBlock$Pose.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class CopperGolemStatueBlockEntity extends BlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    createStatue(copperGolem: CopperGolem): void;
    getItem(itemStack: ItemStack, pose: CopperGolemStatueBlock$Pose): ItemStack;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    // private initCopperGolem(state: BlockState, copperGolem: CopperGolem): CopperGolem;
    removeStatue(state: BlockState): CopperGolem;
}
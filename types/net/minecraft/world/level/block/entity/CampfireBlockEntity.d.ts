import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SleepingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SleepingBlockEntity.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentMap$Builder } from '../../../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Clearable } from '../../../../../../net/minecraft/world/Clearable.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CampfireCookingRecipe } from '../../../../../../net/minecraft/world/item/crafting/CampfireCookingRecipe.d.ts'
import type { RecipeManager$CachedCheck } from '../../../../../../net/minecraft/world/item/crafting/RecipeManager$CachedCheck.d.ts'
import type { SingleRecipeInput } from '../../../../../../net/minecraft/world/item/crafting/SingleRecipeInput.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class CampfireBlockEntity extends BlockEntity implements SleepingBlockEntity, Clearable {
    static NBT_ATTACHMENT_KEY: string;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static cookTick(paramlevel: ServerLevel, parampos: BlockPos, paramstate: BlockState, paramentity: CampfireBlockEntity, paramrecipeCache: RecipeManager$CachedCheck<SingleRecipeInput, CampfireCookingRecipe>): void;
    static cooldownTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: CampfireBlockEntity): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static particleTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: CampfireBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private cookingProgress: number[];
    // private cookingTime: number[];
    readonly items: ItemStack[];
    // private sleepingTicker: TickingBlockEntity;
    // private tickWrapper: WrappedBlockEntityTickInvokerAccessor;
    applyImplicitComponents(components: DataComponentGetter): void;
    clearContent(): void;
    collectImplicitComponents(components: DataComponentMap$Builder): void;
    getItems(): ItemStack[];
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    isSleeping(): boolean;
    lithium$getSleepingTicker(): TickingBlockEntity;
    lithium$getTickWrapper(): WrappedBlockEntityTickInvokerAccessor;
    lithium$setSleepingTicker(arg0: TickingBlockEntity): void;
    lithium$setTickWrapper(arg0: WrappedBlockEntityTickInvokerAccessor): void;
    lithium$startSleeping(): boolean;
    loadAdditional(input: ValueInput): void;
    // private markUpdated(): void;
    placeFood(serverLevel: ServerLevel, sourceEntity: LivingEntity, placeItem: ItemStack): boolean;
    preRemoveSideEffects(pos: BlockPos, state: BlockState): void;
    removeComponentsFromTag(output: ValueOutput): void;
    saveAdditional(output: ValueOutput): void;
    setTicker(arg0: TickingBlockEntity): void;
    sleepOnlyCurrentTick(): void;
    wakeUpNow(): void;
}
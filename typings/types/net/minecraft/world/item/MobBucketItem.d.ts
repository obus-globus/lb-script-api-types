import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { BucketItem } from '../../../../net/minecraft/world/item/BucketItem.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ClipContext$Fluid } from '../../../../net/minecraft/world/level/ClipContext$Fluid.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class MobBucketItem extends BucketItem {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Holder<Item>>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Holder<Item>>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static MAX_BAR_WIDTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Item>>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getEmptySuccessItem(paramitemStack: ItemStack, paramplayer: Player): ItemStack;
    static getId(paramitem: Item): number;
    constructor(type: EntityType<Mob>, content: Fluid, emptySound: SoundEvent, properties: Item$Properties)
    // private emptySound: SoundEvent;
    // private type: EntityType<Mob>;
    checkExtraContent(user: LivingEntity, level: Level, itemStack: ItemStack, pos: BlockPos): void;
    emptyContents(user: LivingEntity, level: Level, pos: BlockPos, hitResult: BlockHitResult): boolean;
    getFluidContext(): ClipContext$Fluid;
    playEmptySound(user: LivingEntity, level: LevelAccessor, pos: BlockPos): void;
    // private spawn(level: ServerLevel, itemStack: ItemStack, spawnPos: BlockPos): void;
}
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { BlockItem } from '../../../../net/minecraft/world/item/BlockItem.d.ts'
import type { DispensibleContainerItem } from '../../../../net/minecraft/world/item/DispensibleContainerItem.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TagValueOutput } from '../../../../net/minecraft/world/level/storage/TagValueOutput.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class SolidBucketItem extends BlockItem implements DispensibleContainerItem {
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
    static getId(paramitem: Item): number;
    static setBlockEntityData(paramstack: ItemStack, paramtype: BlockEntityType<Object>, paramoutput: TagValueOutput): void;
    static updateCustomBlockEntityTag(paramlevel: Level, paramplayer: Player, parampos: BlockPos, paramitemStack: ItemStack): boolean;
    constructor(content: Block, placeSound: SoundEvent, properties: Item$Properties)
    // private placeSound: SoundEvent;
    checkExtraContent(user: LivingEntity, level: Level, itemStack: ItemStack, pos: BlockPos): void;
    emptyContents(user: LivingEntity, level: Level, pos: BlockPos, hitResult: BlockHitResult): boolean;
    getPlaceSound(blockState: BlockState): SoundEvent;
    useOn(context: UseOnContext): InteractionResult;
}
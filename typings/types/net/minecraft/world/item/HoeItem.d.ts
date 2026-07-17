import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { HoeItemAccessor } from '../../../../net/fabricmc/fabric/mixin/content/registry/HoeItemAccessor.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ToolMaterial } from '../../../../net/minecraft/world/item/ToolMaterial.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class HoeItem extends Item implements HoeItemAccessor {
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
    static changeIntoState(paramstate: BlockState): (param0: UseOnContext) => void;
    static changeIntoStateAndDropItem(paramstate: BlockState, paramitem: ItemLike): (param0: UseOnContext) => void;
    static getId(paramitem: Item): number;
    static onlyIfAirAbove(paramcontext: UseOnContext): boolean;
    constructor(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number, properties: Item$Properties)
    useOn(context: UseOnContext): InteractionResult;
}
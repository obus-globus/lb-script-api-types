import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RecipeCategory } from '../../../../net/minecraft/data/recipes/RecipeCategory.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SignApplicator } from '../../../../net/minecraft/world/item/SignApplicator.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SignBlockEntity } from '../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class HoneycombItem extends Item implements SignApplicator {
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
    static WAXABLES: () => Map<Block, Block>;
    static WAXED_RECIPES: Map<Block, Pair<RecipeCategory, string>>;
    static WAX_OFF_BY_BLOCK: () => Map<Block, Block>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getId(paramitem: Item): number;
    static getWaxed(paramoldState: BlockState): Optional<BlockState>;
    constructor(properties: Item$Properties)
    canApplyToSign(text: SignText, item: ItemStack, player: Player): boolean;
    tryApplyToSign(level: Level, sign: SignBlockEntity, isFrontText: boolean, item: ItemStack, player: Player): boolean;
    useOn(context: UseOnContext): InteractionResult;
}
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SignApplicator } from '../../../../net/minecraft/world/item/SignApplicator.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SignBlockEntity } from '../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class InkSacItem extends Item implements SignApplicator {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Object>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Object>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: (Object | null)[];
    static MAX_BAR_WIDTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getId(paramitem: Item): number;
    constructor(properties: Item$Properties)
    canApplyToSign(text: SignText, item: ItemStack, player: Player): boolean;
    tryApplyToSign(level: Level, sign: SignBlockEntity, isFrontText: boolean, item: ItemStack, player: Player): boolean;
}
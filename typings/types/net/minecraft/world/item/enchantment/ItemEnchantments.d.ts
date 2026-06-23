import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class ItemEnchantments extends Object implements TooltipProvider {
    static CODEC: Codec<ItemEnchantments>;
    static EMPTY: ItemEnchantments;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemEnchantments>;
    private constructor(enchantments: { [key: string]: any })
    // private enchantments: { [key: string]: any };
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    entrySet(): Object2IntMap$Entry<Holder<Enchantment>>[];
    equals(obj: Object | null): boolean;
    getLevel(enchantment: Holder<Enchantment>): number;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): Holder<Enchantment>[];
    size(): number;
    toString(): string;
}
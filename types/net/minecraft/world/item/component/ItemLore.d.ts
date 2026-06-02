import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class ItemLore extends Record implements TooltipProvider {
    static CODEC: Codec<ItemLore>;
    static EMPTY: ItemLore;
    static MAX_LINES: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemLore>;
    constructor(lines: Component[])
    constructor(lines: Component[], styledLines: Component[])
    // private lines: Component[];
    // private styledLines: Component[];
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lines(): Component[];
    styledLines(): Component[];
    toString(): string;
    withLineAdded(component: Component): ItemLore;
}
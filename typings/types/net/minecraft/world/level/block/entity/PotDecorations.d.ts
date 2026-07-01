import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$TooltipContext } from '../../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class PotDecorations extends Record implements TooltipProvider {
    static CODEC: Codec<PotDecorations>;
    static EMPTY: PotDecorations;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PotDecorations>;
    constructor(back: Optional<Item>, left: Optional<Item>, right: Optional<Item>, front: Optional<Item>)
    constructor(back: Item, left: Item, right: Item, front: Item)
    // private back: Optional<Item>;
    // private front: Optional<Item>;
    // private left: Optional<Item>;
    // private right: Optional<Item>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    back(): Optional<Item>;
    equals(o: Object | null): boolean;
    front(): Optional<Item>;
    hashCode(): number;
    left(): Optional<Item>;
    ordered(): Item[];
    right(): Optional<Item>;
    toString(): string;
}
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
import type { BeehiveBlockEntity$Occupant } from '../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity$Occupant.d.ts'
export class Bees extends Record implements TooltipProvider {
    static CODEC: Codec<Bees>;
    static EMPTY: Bees;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Bees>;
    constructor(bees: BeehiveBlockEntity$Occupant[])
    // private bees: BeehiveBlockEntity$Occupant[];
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    bees(): BeehiveBlockEntity$Occupant[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
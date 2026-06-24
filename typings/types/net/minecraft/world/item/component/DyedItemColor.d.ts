import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class DyedItemColor extends Record implements TooltipProvider {
    static CODEC: Codec<DyedItemColor>;
    static LEATHER_COLOR: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, DyedItemColor>;
    static applyDyes(paramitemStack: ItemStack, paramdyes: DyeColor[]): ItemStack;
    static applyDyes(paramcurrentDye: DyedItemColor, paramdyes: DyeColor[]): DyedItemColor;
    static getOrDefault(paramitemStack: ItemStack, paramdefaultColor: number): number;
    constructor(rgb: number)
    // private rgb: number;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rgb(): number;
    toString(): string;
}
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { FireworkExplosion$Shape } from '../../../../../net/minecraft/world/item/component/FireworkExplosion$Shape.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class FireworkExplosion extends Record implements TooltipProvider {
    static CODEC: Codec<FireworkExplosion>;
    static COLOR_LIST_CODEC: Codec<(Object | null)[]>;
    static DEFAULT: FireworkExplosion;
    static STREAM_CODEC: StreamCodec<ByteBuf, FireworkExplosion>;
    constructor(shape: FireworkExplosion$Shape, colors: (Object | null)[], fadeColors: (Object | null)[], hasTrail: boolean, hasTwinkle: boolean)
    // private colors: (Object | null)[];
    // private fadeColors: (Object | null)[];
    // private hasTrail: boolean;
    // private hasTwinkle: boolean;
    // private shape: FireworkExplosion$Shape;
    addAdditionalTooltip(consumer: (param0: Component) => void): void;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    colors(): (Object | null)[];
    equals(o: Object | null): boolean;
    fadeColors(): (Object | null)[];
    hasTrail(): boolean;
    hasTwinkle(): boolean;
    hashCode(): number;
    shape(): FireworkExplosion$Shape;
    toString(): string;
    withFadeColors(fadeColors: (Object | null)[]): FireworkExplosion;
}
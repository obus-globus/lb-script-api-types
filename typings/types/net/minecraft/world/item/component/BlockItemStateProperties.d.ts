import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockItemStateProperties extends Record implements TooltipProvider {
    static CODEC: Codec<BlockItemStateProperties>;
    static EMPTY: BlockItemStateProperties;
    static STREAM_CODEC: StreamCodec<ByteBuf, BlockItemStateProperties>;
    constructor(properties: JavaMap<string, string>)
    // private properties: JavaMap<string, string>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    apply(state: BlockState): BlockState;
    equals(o: Object | null): boolean;
    get<T extends Comparable<T>>(property: Property<T>): T;
    hashCode(): number;
    isEmpty(): boolean;
    properties(): JavaMap<string, string>;
    toString(): string;
    with<T extends Comparable<T>>(property: Property<T>, value: T): BlockItemStateProperties;
    with<T extends Comparable<T>>(property: Property<T>, state: BlockState): BlockItemStateProperties;
}
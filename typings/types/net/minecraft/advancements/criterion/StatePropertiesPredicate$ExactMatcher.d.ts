import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { StatePropertiesPredicate$ValueMatcher } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate$ValueMatcher.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StateHolder } from '../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class StatePropertiesPredicate$ExactMatcher extends Record implements StatePropertiesPredicate$ValueMatcher {
    static CODEC: Codec<StatePropertiesPredicate$ExactMatcher>;
    static CODEC: Codec<StatePropertiesPredicate$ValueMatcher>;
    static STREAM_CODEC: StreamCodec<ByteBuf, StatePropertiesPredicate$ExactMatcher>;
    static STREAM_CODEC: StreamCodec<ByteBuf, StatePropertiesPredicate$ValueMatcher>;
    private constructor(value: string)
    // private value: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    match<T extends Comparable<T>>(state: StateHolder<Object, Object>, property: Property<T>): boolean;
    toString(): string;
    value(): string;
}
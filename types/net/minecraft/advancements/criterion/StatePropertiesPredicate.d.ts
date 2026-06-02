import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StatePropertiesPredicate$PropertyMatcher } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate$PropertyMatcher.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class StatePropertiesPredicate extends Record {
    static CODEC: Codec<StatePropertiesPredicate>;
    static STREAM_CODEC: StreamCodec<ByteBuf, StatePropertiesPredicate>;
    constructor(properties: StatePropertiesPredicate$PropertyMatcher[])
    // private properties: StatePropertiesPredicate$PropertyMatcher[];
    checkState(states: StateDefinition<Object, Object>): Optional<string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(state: BlockState): boolean;
    matches<S extends StateHolder<Object, S>>(definition: StateDefinition<Object, S>, state: S): boolean;
    matches(state: FluidState): boolean;
    properties(): StatePropertiesPredicate$PropertyMatcher[];
    toString(): string;
}
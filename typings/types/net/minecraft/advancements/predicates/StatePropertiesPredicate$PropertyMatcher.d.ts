import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StatePropertiesPredicate$ValueMatcher } from '../../../../net/minecraft/advancements/predicates/StatePropertiesPredicate$ValueMatcher.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StateDefinition } from '../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export class StatePropertiesPredicate$PropertyMatcher extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, StatePropertiesPredicate$PropertyMatcher>;
    private constructor(name: string, valueMatcher: StatePropertiesPredicate$ValueMatcher)
    // private name: string;
    // private valueMatcher: StatePropertiesPredicate$ValueMatcher;
    checkState(states: StateDefinition<Object, any>): Optional<string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    match<S extends StateHolder<Object, S>>(definition: StateDefinition<Object, S>, state: S): boolean;
    name(): string;
    toString(): string;
    valueMatcher(): StatePropertiesPredicate$ValueMatcher;
}
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
export class PriorityProvider$Selector<Context extends Object | number | string | boolean, Condition extends PriorityProvider$SelectorCondition<Context>> extends Record {
    static codec(paramconditionCodec: Codec<Object>): Codec<PriorityProvider$Selector<Object, any>>;
    // private condition: Optional<Condition>;
    // private priority: number;
    condition(): Optional<Condition>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    priority(): number;
    toString(): string;
}
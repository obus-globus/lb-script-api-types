import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
export class PriorityProvider$Selector<Context extends unknown, Condition extends PriorityProvider$SelectorCondition<Context>> extends Record {
    static codec<Context extends unknown, Condition extends PriorityProvider$SelectorCondition<Context>>(paramconditionCodec: Codec<Condition>): Codec<PriorityProvider$Selector<Context, Condition>>;
    constructor(condition: Condition, priority: number)
    constructor(condition: Optional<Condition>, priority: number)
    constructor(priority: number)
    // private condition: Optional<Condition>;
    // private priority: number;
    condition(): Optional<Condition>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    priority(): number;
    toString(): string;
}
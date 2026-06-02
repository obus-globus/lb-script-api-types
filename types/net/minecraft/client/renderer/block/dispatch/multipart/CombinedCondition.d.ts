import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CombinedCondition$Operation } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/CombinedCondition$Operation.d.ts'
import type { Condition } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class CombinedCondition extends Record implements Condition {
    static CODEC: Codec<(param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>>;
    constructor(operation: CombinedCondition$Operation, terms: (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>[])
    // private operation: CombinedCondition$Operation;
    // private terms: (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate(definition: StateDefinition<O, S>): (param0: S) => kotlin.Boolean;
    operation(): CombinedCondition$Operation;
    terms(): (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>[];
    toString(): string;
}
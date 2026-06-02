import type { ImmutableMap$Builder } from '../../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Condition } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { KeyValueCondition$Terms } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/KeyValueCondition$Terms.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class ConditionBuilder extends Object {
    constructor()
    // private terms: ImmutableMap$Builder<string, KeyValueCondition$Terms>;
    build(): (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>;
    negatedTerm<T extends Comparable<T>>(property: Property<T>, value: T): ConditionBuilder;
    // private putValue(property: Property<T>, term: KeyValueCondition$Terms): void;
    term<T extends Comparable<T>>(property: Property<T>, value: T): ConditionBuilder;
    term<T extends Comparable<T>>(property: Property<T>, value: T, values: T[]): ConditionBuilder;
}
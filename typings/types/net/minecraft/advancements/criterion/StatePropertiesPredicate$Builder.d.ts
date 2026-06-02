import type { ImmutableList$Builder } from '../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { StatePropertiesPredicate$PropertyMatcher } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate$PropertyMatcher.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class StatePropertiesPredicate$Builder extends Object {
    static properties(): StatePropertiesPredicate$Builder;
    private constructor()
    // private matchers: ImmutableList$Builder<StatePropertiesPredicate$PropertyMatcher>;
    build(): Optional<StatePropertiesPredicate>;
    hasProperty(property: Property<Object>, value: string): StatePropertiesPredicate$Builder;
    hasProperty<T extends Comparable<T> & StringRepresentable>(property: Property<T>, value: T): StatePropertiesPredicate$Builder;
    hasProperty(property: Property<boolean>, value: boolean): StatePropertiesPredicate$Builder;
    hasProperty(property: Property<number>, value: number): StatePropertiesPredicate$Builder;
}
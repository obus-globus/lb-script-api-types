import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { StateHolder } from '../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export interface StatePropertiesPredicate$ValueMatcher extends Object{
    match<T extends Comparable<T>>(state: StateHolder<Object, Object>, property: Property<T>): boolean;
}
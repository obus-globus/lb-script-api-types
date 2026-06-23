import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export interface StateDefinition$Factory<O extends unknown, S extends unknown> extends Object{
    create(type: O, propertyKeys: Property<any>[], propertyValues: Comparable<Object>[]): S;
}
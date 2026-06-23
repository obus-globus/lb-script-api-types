import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateDefinition$Factory } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition$Factory.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class StateDefinition$Builder<O extends unknown, S extends StateHolder<O, S>> extends Object {
    constructor(owner: O)
    // private owner: O;
    // private properties: { [key: string]: Property<any> };
    add(properties: Property<any>[]): StateDefinition$Builder<O, S>;
    create(defaultState: (param0: O) => S, factory: StateDefinition$Factory<O, S>): StateDefinition<O, S>;
    // private validateProperty<T extends Comparable<T>>(property: Property<T>): void;
}
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StateDefinition$Factory } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition$Factory.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class StateDefinition<O extends unknown, S extends StateHolder<O, S>> extends Object {
    constructor(defaultState: (param0: O) => S, owner: O, factory: StateDefinition$Factory<O, S>, properties: { [key: string]: Property<any> })
    readonly owner: O;
    // private propertiesByName: { [key: string]: Property<any> };
    // private propertiesCodec: MapCodec<S>;
    // private states: S[];
    any(): S;
    getOwner(): O;
    getPossibleStates(): S[];
    getProperties(): Property<any>[];
    getProperty(name: string): Property<any>;
    isSingletonState(): boolean;
    propertiesCodec(): MapCodec<S>;
    toString(): string;
}
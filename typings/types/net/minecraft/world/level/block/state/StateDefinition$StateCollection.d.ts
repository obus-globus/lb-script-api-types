import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class StateDefinition$StateCollection<S extends StateHolder<Object, Object>> extends Record {
    constructor(statesByValues: Map<Comparable<Object>[], S>, statesByPivotCache: Map<Comparable<Object>[], S[]>)
    // private statesByPivotCache: Map<Comparable<Object>[], S[]>;
    // private statesByValues: Map<Comparable<Object>[], S>;
    // private computeStatesForPivot<T extends Comparable<T>>(valuesKey: Comparable<Object>[], pivot: Property<T>, pivotIndex: number): S[];
    equals(o: Object | null): boolean;
    fillNeighborsForState(propertyKeys: Property<Object>[], propertyValues: Comparable<Object>[]): S[][];
    // private fillStatesForPivot<T extends Comparable<T>>(valuesKey: Comparable<Object>[], pivot: Property<T>, pivotIndex: number): S[];
    hashCode(): number;
    statesByPivotCache(): Map<Comparable<Object>[], S[]>;
    statesByValues(): Map<Comparable<Object>[], S>;
    toString(): string;
}
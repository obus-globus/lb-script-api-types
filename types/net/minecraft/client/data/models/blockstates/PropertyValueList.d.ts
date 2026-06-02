import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Property$Value } from '../../../../../../net/minecraft/world/level/block/state/properties/Property$Value.d.ts'
export class PropertyValueList extends Record {
    static EMPTY: PropertyValueList;
    static of(paramvalues: Object | null): PropertyValueList;
    constructor(values: Property$Value<Object>[])
    // private values: Property$Value<Object>[];
    equals(o: Object | null): boolean;
    extend(other: PropertyValueList): PropertyValueList;
    extend(element: Property$Value<Object>): PropertyValueList;
    getKey(): string;
    hashCode(): number;
    toString(): string;
    values(): Property$Value<Object>[];
}
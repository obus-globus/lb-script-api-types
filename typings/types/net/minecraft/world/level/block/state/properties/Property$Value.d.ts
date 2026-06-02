import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class Property$Value<T extends Comparable<T>> extends Record {
    constructor(property: Property<T>, value: T)
    // private property: Property<T>;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    property(): Property<T>;
    toString(): string;
    value(): T;
    valueName(): string;
}
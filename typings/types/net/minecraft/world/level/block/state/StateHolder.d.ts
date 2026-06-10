import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { Property$Value } from '../../../../../../net/minecraft/world/level/block/state/properties/Property$Value.d.ts'
export abstract class StateHolder<O extends Object | number | string | boolean, S extends Object | number | string | boolean> extends Object {
    static NAME_TAG: string;
    static PROPERTIES_TAG: string;
    constructor(owner: O, propertyKeys: Property<Object>[], propertyValues: Comparable<Object>[])
    // private neighbors: S[][];
    // private owner: O;
    // private propertyKeys: Property<Object>[];
    // private propertyValues: Comparable<Object>[];
    cycle<T extends Comparable<T>>(property: Property<T>): S;
    equals(obj: Object | null): boolean;
    // private getNullableValue<T extends Comparable<T>>(property: Property<T>): T;
    getOptionalValue<T extends Comparable<T>>(property: Property<T>): Optional<T>;
    getProperties(): Property<Object>[];
    getValue<T extends Comparable<T>>(property: Property<T>): T;
    getValueOrElse<T extends Comparable<T>>(property: Property<T>, defaultValue: T): T;
    getValues(): Stream<Property$Value<Object>>;
    hasProperty(property: Property<Object>): boolean;
    hashCode(): number;
    initializeNeighbors(neighbors: S[][]): void;
    isSingletonState(): boolean;
    setValue<T extends Comparable<T>, V extends T>(property: Property<T>, value: V): S;
    // private setValueInternal<T extends Comparable<T>, V extends T>(property: Property<T>, propertyIndex: number, value: V): S;
    toString(): string;
    trySetValue<T extends Comparable<T>, V extends T>(property: Property<T>, value: V): S;
    // private valueIndex(property: Property<Object>): number;
}
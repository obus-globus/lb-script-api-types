import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../../../../kotlin/properties/ReadWriteProperty.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
export class MutableProperty<T extends unknown> extends Object implements ReadWriteProperty<Object, T> {
    constructor(value: T)
    value: T;
    component1(): T;
    copy(value: T): MutableProperty<T>;
    equals(other: Object | null): boolean;
    getValue(thisRef: Object | null, property: KProperty<Object>): T;
    hashCode(): number;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: T): void;
    toString(): string;
}
import type { Object } from '../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../kotlin/properties/ReadWriteProperty.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export class NotNullVar<T extends unknown> extends Object implements ReadWriteProperty<Object, T> {
    constructor()
    // private value: T | null;
    getValue(thisRef: Object | null, property: KProperty<Object>): T;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: T): void;
    toString(): string;
}
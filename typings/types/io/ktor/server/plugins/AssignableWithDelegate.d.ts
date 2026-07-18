import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
export class AssignableWithDelegate<T extends unknown> extends Object {
    constructor(property: () => T)
    // private assigned: T | null;
    readonly property: () => T;
    getValue(thisRef: Object, property: KProperty<Object>): T;
    setValue(thisRef: Object, property: KProperty<Object>, value: T): void;
}
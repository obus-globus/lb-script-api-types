import type { Object } from '../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../kotlin/properties/ReadWriteProperty.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export class Delegates extends Object {
    static INSTANCE: Delegates;
    notNull<T extends unknown>(): ReadWriteProperty<Object, T>;
    observable<T extends unknown>(initialValue: T, onChange: (param0: KProperty<Object>, param1: T, param2: T) => void): ReadWriteProperty<Object, T>;
    vetoable<T extends unknown>(initialValue: T, onChange: (param0: KProperty<Object>, param1: T, param2: T) => boolean): ReadWriteProperty<Object, T>;
}
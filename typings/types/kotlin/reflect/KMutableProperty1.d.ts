import type { Object } from '../../java/lang/Object.d.ts'
import type { KMutableProperty } from '../../kotlin/reflect/KMutableProperty.d.ts'
import type { KMutableProperty1$Setter } from '../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { KProperty1 } from '../../kotlin/reflect/KProperty1.d.ts'
export interface KMutableProperty1<T extends unknown, V extends unknown> extends Object, KMutableProperty<V>, KProperty1<T, V>{
    readonly setter: KMutableProperty1$Setter<T, V>;
    set(receiver: T, value: V): void;
}
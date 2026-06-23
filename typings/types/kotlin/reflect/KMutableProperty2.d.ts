import type { Object } from '../../java/lang/Object.d.ts'
import type { KMutableProperty } from '../../kotlin/reflect/KMutableProperty.d.ts'
import type { KMutableProperty2$Setter } from '../../kotlin/reflect/KMutableProperty2$Setter.d.ts'
import type { KProperty2 } from '../../kotlin/reflect/KProperty2.d.ts'
export interface KMutableProperty2<D extends unknown, E extends unknown, V extends unknown> extends Object, KMutableProperty<V>, KProperty2<D, E, V>{
    readonly setter: KMutableProperty2$Setter<D, E, V>;
    set(receiver1: D, receiver2: E, value: V): void;
}
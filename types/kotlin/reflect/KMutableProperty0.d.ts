import type { Object } from '../../java/lang/Object.d.ts'
import type { KMutableProperty } from '../../kotlin/reflect/KMutableProperty.d.ts'
import type { KMutableProperty0$Setter } from '../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { KProperty0 } from '../../kotlin/reflect/KProperty0.d.ts'
export interface KMutableProperty0<V extends Object | number | string | boolean> extends Object, KMutableProperty<V>, KProperty0<V>{
    readonly setter: KMutableProperty0$Setter<V>;
    set(value: V): void;
}
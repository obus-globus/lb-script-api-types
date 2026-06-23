import type { Object } from '../../java/lang/Object.d.ts'
import type { KMutableProperty$Setter } from '../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface KMutableProperty<V extends unknown> extends Object, KProperty<V>{
    readonly setter: KMutableProperty$Setter<V>;
}
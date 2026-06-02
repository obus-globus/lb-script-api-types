import type { Object } from '../../java/lang/Object.d.ts'
import type { KFunction } from '../../kotlin/reflect/KFunction.d.ts'
import type { KProperty$Accessor } from '../../kotlin/reflect/KProperty$Accessor.d.ts'
export interface KMutableProperty$Setter<V extends Object | number | string | boolean> extends Object, KFunction<void>, KProperty$Accessor<V>{
}
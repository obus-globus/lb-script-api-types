import type { Object } from '../../java/lang/Object.d.ts'
import type { KFunction } from '../../kotlin/reflect/KFunction.d.ts'
import type { KProperty$Accessor } from '../../kotlin/reflect/KProperty$Accessor.d.ts'
export interface KProperty$Getter<V extends Object | number | string | boolean> extends Object, KFunction<V>, KProperty$Accessor<V>{
}
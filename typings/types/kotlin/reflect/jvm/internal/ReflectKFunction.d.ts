import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../../kotlin/reflect/KFunction.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export interface ReflectKFunction extends Object, KFunction<Object>, ReflectKCallable<Object>{
    readonly signature: string;
}
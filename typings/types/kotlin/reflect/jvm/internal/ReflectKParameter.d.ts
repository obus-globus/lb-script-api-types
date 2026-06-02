import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export interface ReflectKParameter extends Object, KParameter{
    readonly callable: ReflectKCallable<Object>;
}
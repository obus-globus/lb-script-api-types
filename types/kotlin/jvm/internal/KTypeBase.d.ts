import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export interface KTypeBase extends Object, KType{
    readonly javaType: Type | null;
}
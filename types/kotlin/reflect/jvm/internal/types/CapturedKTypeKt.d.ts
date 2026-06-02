import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../../kotlin/reflect/KTypeParameter.d.ts'
export class CapturedKTypeKt extends Object {
    static allTypeParameters(paramarg0: KClass<Object>): KTypeParameter[];
    static captureKTypeFromArguments(paramarg0: KType): KType;
}
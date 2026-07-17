import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class KotlinBuiltIns$Primitives extends Object {
    private constructor(arg0: Map<PrimitiveType, SimpleType>, arg1: Map<KotlinType, SimpleType>, arg2: Map<SimpleType, SimpleType>)
    kotlinArrayTypeToPrimitiveKotlinType: Map<SimpleType, SimpleType>;
    primitiveKotlinTypeToKotlinArrayType: Map<KotlinType, SimpleType>;
    primitiveTypeToArrayKotlinType: Map<PrimitiveType, SimpleType>;
}
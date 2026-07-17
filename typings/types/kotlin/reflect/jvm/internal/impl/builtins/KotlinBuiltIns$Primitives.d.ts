import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class KotlinBuiltIns$Primitives extends Object {
    private constructor(arg0: JavaMap<PrimitiveType, SimpleType>, arg1: JavaMap<KotlinType, SimpleType>, arg2: JavaMap<SimpleType, SimpleType>)
    kotlinArrayTypeToPrimitiveKotlinType: JavaMap<SimpleType, SimpleType>;
    primitiveKotlinTypeToKotlinArrayType: JavaMap<KotlinType, SimpleType>;
    primitiveTypeToArrayKotlinType: JavaMap<PrimitiveType, SimpleType>;
}
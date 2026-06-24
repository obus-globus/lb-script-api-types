import type { KotlinBuiltIns$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class KotlinBuiltIns$Primitives extends Object {
    private constructor(arg0: { [key in PrimitiveType]: SimpleType }, arg1: Map<KotlinType, SimpleType>, arg2: Map<SimpleType, SimpleType>)
    constructor(arg0: Map<Object | null, Object | null>, arg1: Map<Object | null, Object | null>, arg2: Map<Object | null, Object | null>, arg3: KotlinBuiltIns$1)
    kotlinArrayTypeToPrimitiveKotlinType: Map<SimpleType, SimpleType>;
    primitiveKotlinTypeToKotlinArrayType: Map<KotlinType, SimpleType>;
    primitiveTypeToArrayKotlinType: { [key in PrimitiveType]: SimpleType };
}
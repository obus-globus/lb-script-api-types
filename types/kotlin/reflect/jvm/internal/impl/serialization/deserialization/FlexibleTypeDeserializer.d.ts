import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export interface FlexibleTypeDeserializer extends Object{
    create(arg0: ProtoBuf$Type, arg1: string, arg2: SimpleType, arg3: SimpleType): KotlinType;
}
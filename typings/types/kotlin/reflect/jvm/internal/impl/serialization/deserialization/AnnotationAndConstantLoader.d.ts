import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { AnnotationLoader } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationLoader.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface AnnotationAndConstantLoader<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object, AnnotationLoader<A>{
    loadAnnotationDefaultValue(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): C;
    loadPropertyConstant(arg0: ProtoContainer, arg1: ProtoBuf$Property, arg2: KotlinType): C;
}
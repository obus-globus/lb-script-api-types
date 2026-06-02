import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
export interface TypeParameterResolver extends Object{
    resolveTypeParameter(arg0: JavaTypeParameter): TypeParameterDescriptor;
}
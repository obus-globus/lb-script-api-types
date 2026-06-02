import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeParameterResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/TypeParameterResolver.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
export class TypeParameterResolver$EMPTY extends Object implements TypeParameterResolver {
    static INSTANCE: TypeParameterResolver$EMPTY;
    private constructor()
    resolveTypeParameter(arg0: JavaTypeParameter): TypeParameterDescriptor;
}
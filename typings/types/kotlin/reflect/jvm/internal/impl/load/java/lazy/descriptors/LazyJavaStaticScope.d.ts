import type { PropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { LazyJavaScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope.d.ts'
import type { LazyJavaScope$MethodSignatureData } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope$MethodSignatureData.d.ts'
import type { JavaMethod } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class LazyJavaStaticScope extends LazyJavaScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext)
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    resolveMethodSignature(arg0: JavaMethod, arg1: TypeParameterDescriptor[], arg2: KotlinType, arg3: ValueParameterDescriptor[]): LazyJavaScope$MethodSignatureData;
}
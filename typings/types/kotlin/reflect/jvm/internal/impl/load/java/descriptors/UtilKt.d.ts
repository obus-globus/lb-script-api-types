import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { LazyJavaStaticClassScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaStaticClassScope.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class UtilKt extends Object {
    static copyValueParameters(paramarg0: KotlinType[], paramarg1: ValueParameterDescriptor[], paramarg2: CallableDescriptor): ValueParameterDescriptor[];
    static getParentJavaStaticClassScope(paramarg0: ClassDescriptor): LazyJavaStaticClassScope;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function3 } from '../../../../../../../kotlin/jvm/functions/Function3.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JvmDescriptorTypeWriter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmDescriptorTypeWriter.d.ts'
import type { JvmTypeFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmTypeFactory.d.ts'
import type { TypeMappingConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingConfiguration.d.ts'
import type { TypeMappingMode } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingMode.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class DescriptorBasedTypeSignatureMappingKt extends Object {
    static computeInternalName(paramarg0: ClassDescriptor, paramarg1: TypeMappingConfiguration<Object>): string;
    static hasVoidReturnType(paramarg0: CallableDescriptor): boolean;
    static mapType(paramarg0: KotlinType, paramarg1: JvmTypeFactory<Object>, paramarg2: TypeMappingMode, paramarg3: TypeMappingConfiguration<Object>, paramarg4: JvmDescriptorTypeWriter<Object>, paramarg5: Function3<Object, Object, Object, void>): Object | null;
}
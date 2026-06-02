import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
import type { TypeMappingConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingConfiguration.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TypeMappingConfigurationImpl extends Object implements TypeMappingConfiguration<JvmType> {
    static INSTANCE: TypeMappingConfigurationImpl;
    private constructor()
    commonSupertype(arg0: E[]): KotlinType;
    getPredefinedFullInternalNameForClass(arg0: ClassDescriptor): string;
    getPredefinedInternalNameForClass(arg0: ClassDescriptor): string;
    getPredefinedTypeForClass(arg0: ClassDescriptor): JvmType;
    preprocessType(arg0: KotlinType): KotlinType;
    processErrorType(arg0: KotlinType, arg1: ClassDescriptor): void;
}
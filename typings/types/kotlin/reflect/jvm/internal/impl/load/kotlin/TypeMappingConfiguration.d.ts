import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface TypeMappingConfiguration<T extends Object | number | string | boolean> extends Object{
    commonSupertype(arg0: E[]): KotlinType;
    getPredefinedFullInternalNameForClass(arg0: ClassDescriptor): string;
    getPredefinedInternalNameForClass(arg0: ClassDescriptor): string;
    getPredefinedTypeForClass(arg0: ClassDescriptor): T;
    preprocessType(arg0: KotlinType): KotlinType;
    processErrorType(arg0: KotlinType, arg1: ClassDescriptor): void;
}
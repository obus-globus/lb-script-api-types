import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeAliasConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeAliasConstructorDescriptor.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class TypeAliasConstructorDescriptorImpl$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    createIfAvailable(arg0: StorageManager, arg1: TypeAliasDescriptor, arg2: ClassConstructorDescriptor): TypeAliasConstructorDescriptor;
    // private getTypeSubstitutorForUnderlyingClass(arg0: TypeAliasDescriptor): TypeSubstitutor;
}
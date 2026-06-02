import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
export interface TypeAliasConstructorDescriptor extends Object, ConstructorDescriptor{
    getUnderlyingConstructorDescriptor(): ClassConstructorDescriptor;
}
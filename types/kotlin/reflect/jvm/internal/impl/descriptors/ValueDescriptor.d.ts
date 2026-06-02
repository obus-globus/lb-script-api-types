import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface ValueDescriptor extends Object, CallableDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getType(): KotlinType;
}
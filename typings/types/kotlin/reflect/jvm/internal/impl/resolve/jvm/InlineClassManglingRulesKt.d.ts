import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class InlineClassManglingRulesKt extends Object {
    static isValueClassThatRequiresMangling(paramarg0: DeclarationDescriptor): boolean;
    static isValueClassThatRequiresMangling(paramarg0: KotlinType): boolean;
    static shouldHideConstructorDueToValueClassTypeValueParameters(paramarg0: CallableMemberDescriptor): boolean;
}
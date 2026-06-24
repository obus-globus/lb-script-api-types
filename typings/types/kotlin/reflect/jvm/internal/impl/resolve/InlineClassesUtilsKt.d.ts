import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class InlineClassesUtilsKt extends Object {
    static isInlineClass(paramarg0: DeclarationDescriptor): boolean;
    static isInlineClassType(paramarg0: KotlinType): boolean;
    static isMultiFieldValueClass(paramarg0: DeclarationDescriptor): boolean;
    static isUnderlyingPropertyOfInlineClass(paramarg0: VariableDescriptor): boolean;
    static isValueClass(paramarg0: DeclarationDescriptor): boolean;
    static needsMfvcFlattening(paramarg0: KotlinType): boolean;
    static unsubstitutedUnderlyingType(paramarg0: KotlinType): KotlinType;
}
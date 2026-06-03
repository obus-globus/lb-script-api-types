import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { InlineClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/InlineClassRepresentation.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { MultiFieldValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MultiFieldValueClassRepresentation.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { Sequence } from '../../../../../../../kotlin/sequences/Sequence.d.ts'
export class DescriptorUtilsKt extends Object {
    static declaresOrInheritsDefaultValue(paramarg0: ValueParameterDescriptor): boolean;
    static firstOverridden(paramarg0: CallableMemberDescriptor, paramarg1: boolean, paramarg2: (param0: Object | null) => boolean): CallableMemberDescriptor;
    static fqNameOrNull(paramarg0: DeclarationDescriptor): FqName;
    static getAnnotationClass(paramarg0: AnnotationDescriptor): ClassDescriptor;
    static getBuiltIns(paramarg0: DeclarationDescriptor): KotlinBuiltIns;
    static getClassId(paramarg0: ClassifierDescriptor): ClassId;
    static getFqNameSafe(paramarg0: DeclarationDescriptor): FqName;
    static getFqNameUnsafe(paramarg0: DeclarationDescriptor): FqNameUnsafe;
    static getInlineClassRepresentation(paramarg0: ClassDescriptor): InlineClassRepresentation<SimpleType>;
    static getKotlinTypeRefiner(paramarg0: ModuleDescriptor): KotlinTypeRefiner;
    static getModule(paramarg0: DeclarationDescriptor): ModuleDescriptor;
    static getMultiFieldValueClassRepresentation(paramarg0: ClassDescriptor): MultiFieldValueClassRepresentation<SimpleType>;
    static getParents(paramarg0: DeclarationDescriptor): Sequence<DeclarationDescriptor>;
    static getParentsWithSelf(paramarg0: DeclarationDescriptor): Sequence<DeclarationDescriptor>;
    static getPropertyIfAccessor(paramarg0: CallableMemberDescriptor): CallableMemberDescriptor;
    static getSuperClassNotAny(paramarg0: ClassDescriptor): ClassDescriptor;
    static isTypeRefinementEnabled(paramarg0: ModuleDescriptor): boolean;
    static overriddenTreeAsSequence(paramarg0: CallableMemberDescriptor, paramarg1: boolean): Sequence<CallableMemberDescriptor>;
    static resolveTopLevelClass(paramarg0: ModuleDescriptor, paramarg1: FqName, paramarg2: LookupLocation): ClassDescriptor;
}
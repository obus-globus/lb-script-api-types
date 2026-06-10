import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassDescriptorBase } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorBase.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class EnumEntrySyntheticClassDescriptor extends ClassDescriptorBase {
    static Companion: ModuleAwareClassDescriptor$Companion;
    static create(paramarg0: StorageManager, paramarg1: ClassDescriptor, paramarg2: Name, paramarg3: NotNullLazyValue<Name[]>, paramarg4: AnnotationDescriptor[], paramarg5: SourceElement): EnumEntrySyntheticClassDescriptor;
    private constructor(arg0: StorageManager, arg1: ClassDescriptor, arg2: KotlinType, arg3: Name, arg4: NotNullLazyValue<Name[]>, arg5: AnnotationDescriptor[], arg6: SourceElement)
    readonly annotations: AnnotationDescriptor[];
    // private enumMemberNames: NotNullLazyValue<Name[]>;
    // private scope: MemberScope;
    readonly typeConstructor: TypeConstructor;
    getAnnotations(): AnnotationDescriptor[];
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): ClassConstructorDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getKind(): ClassKind;
    getModality(): Modality;
    getStaticScope(): MemberScope;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedMemberScope(): MemberScope;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope;
    getUnsubstitutedPrimaryConstructor(): ClassConstructorDescriptor;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isCompanionObject(): boolean;
    isData(): boolean;
    isExpect(): boolean;
    isFun(): boolean;
    isInline(): boolean;
    isInner(): boolean;
    isValue(): boolean;
    toString(): string;
}
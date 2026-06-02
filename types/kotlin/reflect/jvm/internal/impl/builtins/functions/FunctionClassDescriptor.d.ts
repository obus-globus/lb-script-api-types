import type { FunctionClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassDescriptor$Companion.d.ts'
import type { FunctionClassDescriptor$FunctionTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassDescriptor$FunctionTypeConstructor.d.ts'
import type { FunctionClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassKind.d.ts'
import type { FunctionClassScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassScope.d.ts'
import type { FunctionTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKind.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { MemberScope$Empty } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Empty.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class FunctionClassDescriptor extends AbstractClassDescriptor {
    static Companion: FunctionClassDescriptor$Companion;
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: StorageManager, arg1: PackageFragmentDescriptor, arg2: FunctionTypeKind, arg3: number)
    readonly arity: number;
    readonly containingDeclaration: PackageFragmentDescriptor;
    // private functionKind: FunctionClassKind;
    readonly functionTypeKind: FunctionTypeKind;
    // private memberScope: FunctionClassScope;
    // private parameters: TypeParameterDescriptor[];
    // private storageManager: StorageManager;
    readonly typeConstructor: FunctionClassDescriptor$FunctionTypeConstructor;
    getAnnotations(): AnnotationDescriptor[];
    getArity(): number;
    getCompanionObjectDescriptor(): void;
    getConstructors(): ClassConstructorDescriptor[];
    getContainingDeclaration(): PackageFragmentDescriptor;
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getFunctionTypeKind(): FunctionTypeKind;
    getKind(): ClassKind;
    getModality(): Modality;
    getSource(): SourceElement;
    getStaticScope(): MemberScope$Empty;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): FunctionClassScope;
    getUnsubstitutedPrimaryConstructor(): void;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isCompanionObject(): boolean;
    isData(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isFun(): boolean;
    isInline(): boolean;
    isInner(): boolean;
    isValue(): boolean;
    toString(): string;
}
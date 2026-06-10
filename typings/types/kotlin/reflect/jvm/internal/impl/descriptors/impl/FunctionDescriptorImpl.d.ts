import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorNonRootImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorNonRootImpl.d.ts'
import type { FunctionDescriptorImpl$CopyConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl$CopyConfiguration.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export abstract class FunctionDescriptorImpl extends DeclarationDescriptorNonRootImpl implements FunctionDescriptor {
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: CallableMemberDescriptor$Kind, arg5: SourceElement)
    readonly contextReceiverParameters: ReceiverParameterDescriptor[];
    readonly dispatchReceiverParameter: ReceiverParameterDescriptor;
    readonly extensionReceiverParameter: ReceiverParameterDescriptor;
    readonly initialSignatureDescriptor: FunctionDescriptor;
    // private isActual: boolean;
    // private isExpect: boolean;
    // private isExternal: boolean;
    // private isHiddenForResolutionEverywhereBesideSupercalls: boolean;
    // private isHiddenToOvercomeSignatureClash: boolean;
    // private isInfix: boolean;
    // private isInline: boolean;
    // private isOperator: boolean;
    // private isSuspend: boolean;
    // private isTailrec: boolean;
    readonly kind: CallableMemberDescriptor$Kind;
    // private lazyOverriddenFunctionsTask: () => FunctionDescriptor[];
    readonly modality: Modality;
    readonly original: FunctionDescriptor;
    // private overriddenFunctions: FunctionDescriptor[];
    readonly typeParameters: TypeParameterDescriptor[];
    // private unsubstitutedReturnType: KotlinType;
    // private unsubstitutedValueParameters: ValueParameterDescriptor[];
    // private userDataMap: Map<CallableDescriptor$UserDataKey<Object>, Object>;
    readonly visibility: DescriptorVisibility;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): FunctionDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): FunctionDescriptorImpl;
    doSubstitute(arg0: FunctionDescriptorImpl$CopyConfiguration): FunctionDescriptor;
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getInitialSignatureDescriptor(): FunctionDescriptor;
    getKind(): CallableMemberDescriptor$Kind;
    getModality(): Modality;
    getOriginal(): FunctionDescriptor;
    getOverriddenDescriptors(): FunctionDescriptor[];
    getReturnType(): KotlinType;
    // private getSourceToUseForCopy(arg0: boolean, arg1: FunctionDescriptor): SourceElement;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends Object | number | string | boolean>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getValueParameters(): ValueParameterDescriptor[];
    getVisibility(): DescriptorVisibility;
    hasStableParameterNames(): boolean;
    hasSynthesizedParameterNames(): boolean;
    initialize(arg0: ReceiverParameterDescriptor, arg1: ReceiverParameterDescriptor, arg2: ReceiverParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: ValueParameterDescriptor[], arg5: KotlinType, arg6: Modality, arg7: DescriptorVisibility): FunctionDescriptorImpl;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isHiddenForResolutionEverywhereBesideSupercalls(): boolean;
    isHiddenToOvercomeSignatureClash(): boolean;
    isInfix(): boolean;
    isInline(): boolean;
    isOperator(): boolean;
    isSuspend(): boolean;
    isTailrec(): boolean;
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<FunctionDescriptor>;
    newCopyBuilder(arg0: TypeSubstitutor): FunctionDescriptorImpl$CopyConfiguration;
    // private performOverriddenLazyCalculationIfNeeded(): void;
    putInUserDataMap<V extends Object | number | string | boolean>(arg0: CallableDescriptor$UserDataKey<V>, arg1: Object): void;
    setActual(arg0: boolean): void;
    setExpect(arg0: boolean): void;
    setExternal(arg0: boolean): void;
    setHasStableParameterNames(arg0: boolean): void;
    setHasSynthesizedParameterNames(arg0: boolean): void;
    // private setHiddenForResolutionEverywhereBesideSupercalls(arg0: boolean): void;
    // private setHiddenToOvercomeSignatureClash(arg0: boolean): void;
    setInfix(arg0: boolean): void;
    // private setInitialSignatureDescriptor(arg0: FunctionDescriptor): void;
    setInline(arg0: boolean): void;
    setOperator(arg0: boolean): void;
    setOverriddenDescriptors(arg0: CallableMemberDescriptor[]): void;
    setReturnType(arg0: KotlinType): void;
    setSuspend(arg0: boolean): void;
    setTailrec(arg0: boolean): void;
    setVisibility(arg0: DescriptorVisibility): void;
    substitute(arg0: TypeSubstitutor): FunctionDescriptor;
}
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { LookupLocation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { JavaMethodDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaMethodDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { DeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/DeclaredMemberIndex.d.ts'
import type { LazyJavaScope$MethodSignatureData } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope$MethodSignatureData.d.ts'
import type { LazyJavaScope$ResolvedValueParameters } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope$ResolvedValueParameters.d.ts'
import type { JavaField } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMethod } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaValueParameter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class LazyJavaScope extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: LazyJavaScope)
    constructor(arg0: LazyJavaResolverContext, arg1: LazyJavaScope, arg2: number, arg3: DefaultConstructorMarker)
    // private allDescriptors: NotNullLazyValue<DeclarationDescriptor[]>;
    // private c: LazyJavaResolverContext;
    // private classNamesLazy$delegate: NotNullLazyValue<Object>;
    // private declaredField: MemoizedFunctionToNullable<Name, PropertyDescriptor>;
    // private declaredFunctions: MemoizedFunctionToNotNull<Name, SimpleFunctionDescriptor[]>;
    // private declaredMemberIndex: NotNullLazyValue<DeclaredMemberIndex>;
    // private functionNamesLazy$delegate: NotNullLazyValue<Object>;
    // private functions: MemoizedFunctionToNotNull<Name, SimpleFunctionDescriptor[]>;
    // private mainScope: LazyJavaScope;
    // private properties: MemoizedFunctionToNotNull<Name, PropertyDescriptor[]>;
    // private propertyNamesLazy$delegate: NotNullLazyValue<Object>;
    computeClassNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    computeFunctionNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeImplicitlyDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeMemberIndex(): DeclaredMemberIndex;
    computeMethodReturnType(arg0: JavaMethod, arg1: LazyJavaResolverContext): KotlinType;
    computeNonDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    computePropertyNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    // private createPropertyDescriptor(arg0: JavaField): PropertyDescriptorImpl;
    getAllDescriptors(): NotNullLazyValue<DeclarationDescriptor[]>;
    getC(): LazyJavaResolverContext;
    // private getClassNamesLazy(): Name[];
    getClassifierNames(): Name[];
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getDeclaredMemberIndex(): NotNullLazyValue<DeclaredMemberIndex>;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getFunctionNames(): Name[];
    // private getFunctionNamesLazy(): Name[];
    getMainScope(): LazyJavaScope;
    getOwnerDescriptor(): DeclarationDescriptor;
    // private getPropertyNamesLazy(): Name[];
    // private getPropertyType(arg0: JavaField): KotlinType;
    getVariableNames(): Name[];
    // private isFinalStatic(arg0: JavaField): boolean;
    isVisibleAsFunction(arg0: JavaMethodDescriptor): boolean;
    resolveMethodSignature(arg0: JavaMethod, arg1: TypeParameterDescriptor[], arg2: KotlinType, arg3: ValueParameterDescriptor[]): LazyJavaScope$MethodSignatureData;
    resolveMethodToFunctionDescriptor(arg0: JavaMethod): JavaMethodDescriptor;
    // private resolveProperty(arg0: JavaField): PropertyDescriptor;
    resolveValueParameters(arg0: LazyJavaResolverContext, arg1: FunctionDescriptor, arg2: JavaValueParameter[]): LazyJavaScope$ResolvedValueParameters;
    // private retainMostSpecificMethods(arg0: SimpleFunctionDescriptor[]): void;
    toString(): string;
}
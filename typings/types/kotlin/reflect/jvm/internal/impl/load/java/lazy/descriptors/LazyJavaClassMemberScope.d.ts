import type { DefaultConstructorMarker } from '../../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { CallableDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Modality } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { ClassConstructorDescriptorImpl } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassConstructorDescriptorImpl.d.ts'
import type { LookupLocation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { JavaClassConstructorDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaClassConstructorDescriptor.d.ts'
import type { JavaMethodDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaMethodDescriptor.d.ts'
import type { JavaPropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaPropertyDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { ClassDeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/ClassDeclaredMemberIndex.d.ts'
import type { LazyJavaScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope.d.ts'
import type { LazyJavaScope$MethodSignatureData } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaScope$MethodSignatureData.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaConstructor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaConstructor.d.ts'
import type { JavaField } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMethod } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class LazyJavaClassMemberScope extends LazyJavaScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: ClassDescriptor, arg2: JavaClass, arg3: boolean, arg4: LazyJavaClassMemberScope)
    constructor(arg0: LazyJavaResolverContext, arg1: ClassDescriptor, arg2: JavaClass, arg3: boolean, arg4: LazyJavaClassMemberScope, arg5: number, arg6: DefaultConstructorMarker)
    // private constructors: NotNullLazyValue<ClassConstructorDescriptor[]>;
    // private enumEntryIndex: NotNullLazyValue<Map<Name, JavaField>>;
    // private generatedNestedClassNames: NotNullLazyValue<Name[]>;
    // private jClass: JavaClass;
    // private nestedClassIndex: NotNullLazyValue<Name[]>;
    // private nestedClasses: MemoizedFunctionToNullable<Name, ClassDescriptor>;
    readonly ownerDescriptor: ClassDescriptor;
    // private skipRefinement: boolean;
    // private addAnnotationValueParameter(arg0: ValueParameterDescriptor[], arg1: ConstructorDescriptor, arg2: number, arg3: JavaMethod, arg4: KotlinType, arg5: KotlinType): void;
    // private addFunctionFromSupertypes(arg0: SimpleFunctionDescriptor[], arg1: Name, arg2: SimpleFunctionDescriptor[], arg3: boolean): void;
    // private addOverriddenSpecialMethods(arg0: Name, arg1: SimpleFunctionDescriptor[], arg2: SimpleFunctionDescriptor[], arg3: SimpleFunctionDescriptor[], arg4: (param0: Name) => SimpleFunctionDescriptor[]): void;
    // private addPropertyOverrideByMethod(arg0: PropertyDescriptor[], arg1: PropertyDescriptor[], arg2: PropertyDescriptor[], arg3: (param0: Name) => SimpleFunctionDescriptor[]): void;
    // private computeAnnotationProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    computeClassNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeFunctionNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeImplicitlyDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeMemberIndex(): ClassDeclaredMemberIndex;
    computeNonDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    computePropertyNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    // private computeSupertypes(): KotlinType[];
    // private createAnnotationConstructorParameters(arg0: ClassConstructorDescriptorImpl): ValueParameterDescriptor[];
    // private createDefaultConstructor(): ClassConstructorDescriptor;
    // private createDefaultRecordConstructor(): ClassConstructorDescriptor;
    // private createHiddenCopyIfBuiltinAlreadyAccidentallyOverridden(arg0: SimpleFunctionDescriptor, arg1: CallableDescriptor, arg2: SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private createOverrideForBuiltinFunctionWithErasedParameterIfNeeded(arg0: FunctionDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private createPropertyDescriptorByMethods(arg0: PropertyDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): JavaPropertyDescriptor;
    // private createPropertyDescriptorWithDefaultGetter(arg0: JavaMethod, arg1: KotlinType, arg2: Modality): JavaPropertyDescriptor;
    // private createRecordConstructorParameters(arg0: ClassConstructorDescriptorImpl): ValueParameterDescriptor[];
    // private createRenamedCopy(arg0: SimpleFunctionDescriptor, arg1: Name): SimpleFunctionDescriptor;
    // private createSuspendView(arg0: SimpleFunctionDescriptor): SimpleFunctionDescriptor;
    // private doesClassOverridesProperty(arg0: PropertyDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): boolean;
    // private doesOverride(arg0: CallableDescriptor, arg1: CallableDescriptor): boolean;
    // private doesOverrideRenamedBuiltins(arg0: SimpleFunctionDescriptor): boolean;
    // private doesOverrideRenamedDescriptor(arg0: SimpleFunctionDescriptor, arg1: FunctionDescriptor): boolean;
    // private doesOverrideSuspendFunction(arg0: SimpleFunctionDescriptor): boolean;
    // private findGetterByName(arg0: PropertyDescriptor, arg1: string, arg2: (param0: Name) => SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private findGetterOverride(arg0: PropertyDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private findSetterOverride(arg0: PropertyDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private getConstructorVisibility(arg0: ClassDescriptor): DescriptorVisibility;
    getConstructors$org_jetbrains_kotlin_descriptors_jvm(): NotNullLazyValue<ClassConstructorDescriptor[]>;
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    // private getFunctionsFromSupertypes(arg0: Name): SimpleFunctionDescriptor[];
    getOwnerDescriptor(): ClassDescriptor;
    // private getPropertiesFromSupertypes(arg0: Name): PropertyDescriptor[];
    // private hasSameJvmDescriptorButDoesNotOverride(arg0: SimpleFunctionDescriptor, arg1: FunctionDescriptor): boolean;
    isVisibleAsFunction(arg0: JavaMethodDescriptor): boolean;
    // private isVisibleAsFunctionInCurrentClass(arg0: SimpleFunctionDescriptor): boolean;
    // private obtainOverrideForBuiltInWithErasedValueParametersInJava(arg0: SimpleFunctionDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[], arg2: SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private obtainOverrideForBuiltinWithDifferentJvmName(arg0: SimpleFunctionDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[], arg2: Name, arg3: SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    // private obtainOverrideForSuspend(arg0: SimpleFunctionDescriptor, arg1: (param0: Name) => SimpleFunctionDescriptor[]): SimpleFunctionDescriptor;
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    // private resolveConstructor(arg0: JavaConstructor): JavaClassConstructorDescriptor;
    resolveMethodSignature(arg0: JavaMethod, arg1: TypeParameterDescriptor[], arg2: KotlinType, arg3: ValueParameterDescriptor[]): LazyJavaScope$MethodSignatureData;
    // private resolveRecordComponentToFunctionDescriptor(arg0: JavaRecordComponent): JavaMethodDescriptor;
    // private searchMethodsByNameWithoutBuiltinMagic(arg0: Name): SimpleFunctionDescriptor[];
    // private searchMethodsInSupertypesWithoutBuiltinMagic(arg0: Name): SimpleFunctionDescriptor[];
    // private shouldBeVisibleAsOverrideOfBuiltInWithErasedValueParameters(arg0: SimpleFunctionDescriptor): boolean;
    toString(): string;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../../../../../kotlin/properties/ReadWriteProperty.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { AnnotationArgumentsRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/AnnotationArgumentsRenderingPolicy.d.ts'
import type { ClassifierNamePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ClassifierNamePolicy.d.ts'
import type { DescriptorRenderer$ValueParametersHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer$ValueParametersHandler.d.ts'
import type { DescriptorRendererModifier } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererModifier.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { OverrideRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/OverrideRenderingPolicy.d.ts'
import type { ParameterNameRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ParameterNameRenderingPolicy.d.ts'
import type { PropertyAccessorRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/PropertyAccessorRenderingPolicy.d.ts'
import type { RenderingFormat } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/RenderingFormat.d.ts'
import type { ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class DescriptorRendererOptionsImpl extends Object implements DescriptorRendererOptions {
    constructor()
    // private actualPropertiesInPrimaryConstructor$delegate: ReadWriteProperty<Object, Object>;
    // private alwaysRenderModifiers$delegate: ReadWriteProperty<Object, Object>;
    // private annotationArgumentsRenderingPolicy$delegate: ReadWriteProperty<Object, Object>;
    // private annotationFilter$delegate: ReadWriteProperty<Object, Object>;
    // private boldOnlyForNamesInHtml$delegate: ReadWriteProperty<Object, Object>;
    // private classWithPrimaryConstructor$delegate: ReadWriteProperty<Object, Object>;
    // private classifierNamePolicy$delegate: ReadWriteProperty<Object, Object>;
    // private debugMode$delegate: ReadWriteProperty<Object, Object>;
    // private defaultParameterValueRenderer$delegate: ReadWriteProperty<Object, Object>;
    // private eachAnnotationOnNewLine$delegate: ReadWriteProperty<Object, Object>;
    // private enhancedTypes$delegate: ReadWriteProperty<Object, Object>;
    // private excludedAnnotationClasses$delegate: ReadWriteProperty<Object, Object>;
    // private excludedTypeAnnotationClasses$delegate: ReadWriteProperty<Object, Object>;
    // private includeAdditionalModifiers$delegate: ReadWriteProperty<Object, Object>;
    // private includePropertyConstant$delegate: ReadWriteProperty<Object, Object>;
    // private informativeErrorType$delegate: ReadWriteProperty<Object, Object>;
    // private isLocked: boolean;
    // private modifiers$delegate: ReadWriteProperty<Object, Object>;
    // private normalizedVisibilities$delegate: ReadWriteProperty<Object, Object>;
    // private overrideRenderingPolicy$delegate: ReadWriteProperty<Object, Object>;
    // private parameterNameRenderingPolicy$delegate: ReadWriteProperty<Object, Object>;
    // private parameterNamesInFunctionalTypes$delegate: ReadWriteProperty<Object, Object>;
    // private presentableUnresolvedTypes$delegate: ReadWriteProperty<Object, Object>;
    // private propertyAccessorRenderingPolicy$delegate: ReadWriteProperty<Object, Object>;
    // private propertyConstantRenderer$delegate: ReadWriteProperty<Object, Object>;
    // private receiverAfterName$delegate: ReadWriteProperty<Object, Object>;
    // private renderAbbreviatedTypeComments$delegate: ReadWriteProperty<Object, Object>;
    // private renderCompanionObjectName$delegate: ReadWriteProperty<Object, Object>;
    // private renderConstructorDelegation$delegate: ReadWriteProperty<Object, Object>;
    // private renderConstructorKeyword$delegate: ReadWriteProperty<Object, Object>;
    // private renderDefaultAnnotationArguments$delegate: ReadWriteProperty<Object, Object>;
    // private renderDefaultModality$delegate: ReadWriteProperty<Object, Object>;
    // private renderDefaultVisibility$delegate: ReadWriteProperty<Object, Object>;
    // private renderFunctionContracts$delegate: ReadWriteProperty<Object, Object>;
    // private renderPrimaryConstructorParametersAsProperties$delegate: ReadWriteProperty<Object, Object>;
    // private renderTypeExpansions$delegate: ReadWriteProperty<Object, Object>;
    // private renderUnabbreviatedType$delegate: ReadWriteProperty<Object, Object>;
    // private secondaryConstructorsAsPrimary$delegate: ReadWriteProperty<Object, Object>;
    // private startFromDeclarationKeyword$delegate: ReadWriteProperty<Object, Object>;
    // private startFromName$delegate: ReadWriteProperty<Object, Object>;
    // private textFormat$delegate: ReadWriteProperty<Object, Object>;
    // private typeNormalizer$delegate: ReadWriteProperty<Object, Object>;
    // private uninferredTypeParameterAsName$delegate: ReadWriteProperty<Object, Object>;
    // private unitReturnType$delegate: ReadWriteProperty<Object, Object>;
    // private valueParametersHandler$delegate: ReadWriteProperty<Object, Object>;
    // private verbose$delegate: ReadWriteProperty<Object, Object>;
    // private withDefinedIn$delegate: ReadWriteProperty<Object, Object>;
    // private withSourceFileForTopLevel$delegate: ReadWriteProperty<Object, Object>;
    // private withoutReturnType$delegate: ReadWriteProperty<Object, Object>;
    // private withoutSuperTypes$delegate: ReadWriteProperty<Object, Object>;
    // private withoutTypeParameters$delegate: ReadWriteProperty<Object, Object>;
    getActualPropertiesInPrimaryConstructor(): boolean;
    getAlwaysRenderModifiers(): boolean;
    getAnnotationArgumentsRenderingPolicy(): AnnotationArgumentsRenderingPolicy;
    getAnnotationFilter(): (param0: AnnotationDescriptor) => boolean;
    getBoldOnlyForNamesInHtml(): boolean;
    getClassWithPrimaryConstructor(): boolean;
    getClassifierNamePolicy(): ClassifierNamePolicy;
    getDebugMode(): boolean;
    getDefaultParameterValueRenderer(): (param0: ValueParameterDescriptor) => string;
    getEachAnnotationOnNewLine(): boolean;
    getEnhancedTypes(): boolean;
    getExcludedAnnotationClasses(): FqName[];
    getExcludedTypeAnnotationClasses(): FqName[];
    getIncludeAdditionalModifiers(): boolean;
    getIncludeAnnotationArguments(): boolean;
    getIncludeEmptyAnnotationArguments(): boolean;
    getIncludePropertyConstant(): boolean;
    getInformativeErrorType(): boolean;
    getModifiers(): DescriptorRendererModifier[];
    getNormalizedVisibilities(): boolean;
    getOverrideRenderingPolicy(): OverrideRenderingPolicy;
    getParameterNameRenderingPolicy(): ParameterNameRenderingPolicy;
    getParameterNamesInFunctionalTypes(): boolean;
    getPresentableUnresolvedTypes(): boolean;
    getPropertyAccessorRenderingPolicy(): PropertyAccessorRenderingPolicy;
    getPropertyConstantRenderer(): (param0: ConstantValue<Object>) => string;
    getReceiverAfterName(): boolean;
    getRenderAbbreviatedTypeComments(): boolean;
    getRenderCompanionObjectName(): boolean;
    getRenderConstructorDelegation(): boolean;
    getRenderConstructorKeyword(): boolean;
    getRenderDefaultAnnotationArguments(): boolean;
    getRenderDefaultModality(): boolean;
    getRenderDefaultVisibility(): boolean;
    getRenderFunctionContracts(): boolean;
    getRenderPrimaryConstructorParametersAsProperties(): boolean;
    getRenderTypeExpansions(): boolean;
    getRenderUnabbreviatedType(): boolean;
    getSecondaryConstructorsAsPrimary(): boolean;
    getStartFromDeclarationKeyword(): boolean;
    getStartFromName(): boolean;
    getTextFormat(): RenderingFormat;
    getTypeNormalizer(): (param0: KotlinType) => KotlinType;
    getUninferredTypeParameterAsName(): boolean;
    getUnitReturnType(): boolean;
    getValueParametersHandler(): DescriptorRenderer$ValueParametersHandler;
    getVerbose(): boolean;
    getWithDefinedIn(): boolean;
    getWithSourceFileForTopLevel(): boolean;
    getWithoutReturnType(): boolean;
    getWithoutSuperTypes(): boolean;
    getWithoutTypeParameters(): boolean;
    isLocked(): boolean;
    lock(): void;
    // private property<T extends unknown>(arg0: T): ReadWriteProperty<DescriptorRendererOptionsImpl, T>;
    setActualPropertiesInPrimaryConstructor(arg0: boolean): void;
    setAlwaysRenderModifiers(arg0: boolean): void;
    setAnnotationArgumentsRenderingPolicy(arg0: AnnotationArgumentsRenderingPolicy): void;
    setAnnotationFilter(arg0: (param0: AnnotationDescriptor) => boolean): void;
    setBoldOnlyForNamesInHtml(arg0: boolean): void;
    setClassWithPrimaryConstructor(arg0: boolean): void;
    setClassifierNamePolicy(arg0: ClassifierNamePolicy): void;
    setDebugMode(arg0: boolean): void;
    setDefaultParameterValueRenderer(arg0: (param0: ValueParameterDescriptor) => string): void;
    setEachAnnotationOnNewLine(arg0: boolean): void;
    setEnhancedTypes(arg0: boolean): void;
    setExcludedAnnotationClasses(arg0: FqName[]): void;
    setExcludedTypeAnnotationClasses(arg0: FqName[]): void;
    setIncludeAdditionalModifiers(arg0: boolean): void;
    setIncludePropertyConstant(arg0: boolean): void;
    setInformativeErrorType(arg0: boolean): void;
    setModifiers(arg0: DescriptorRendererModifier[]): void;
    setNormalizedVisibilities(arg0: boolean): void;
    setOverrideRenderingPolicy(arg0: OverrideRenderingPolicy): void;
    setParameterNameRenderingPolicy(arg0: ParameterNameRenderingPolicy): void;
    setParameterNamesInFunctionalTypes(arg0: boolean): void;
    setPresentableUnresolvedTypes(arg0: boolean): void;
    setPropertyAccessorRenderingPolicy(arg0: PropertyAccessorRenderingPolicy): void;
    setPropertyConstantRenderer(arg0: (param0: ConstantValue<Object>) => string): void;
    setReceiverAfterName(arg0: boolean): void;
    setRenderAbbreviatedTypeComments(arg0: boolean): void;
    setRenderCompanionObjectName(arg0: boolean): void;
    setRenderConstructorDelegation(arg0: boolean): void;
    setRenderConstructorKeyword(arg0: boolean): void;
    setRenderDefaultAnnotationArguments(arg0: boolean): void;
    setRenderDefaultModality(arg0: boolean): void;
    setRenderDefaultVisibility(arg0: boolean): void;
    setRenderFunctionContracts(arg0: boolean): void;
    setRenderPrimaryConstructorParametersAsProperties(arg0: boolean): void;
    setRenderTypeExpansions(arg0: boolean): void;
    setRenderUnabbreviatedType(arg0: boolean): void;
    setSecondaryConstructorsAsPrimary(arg0: boolean): void;
    setStartFromDeclarationKeyword(arg0: boolean): void;
    setStartFromName(arg0: boolean): void;
    setTextFormat(arg0: RenderingFormat): void;
    setTypeNormalizer(arg0: (param0: KotlinType) => KotlinType): void;
    setUninferredTypeParameterAsName(arg0: boolean): void;
    setUnitReturnType(arg0: boolean): void;
    setValueParametersHandler(arg0: DescriptorRenderer$ValueParametersHandler): void;
    setVerbose(arg0: boolean): void;
    setWithDefinedIn(arg0: boolean): void;
    setWithSourceFileForTopLevel(arg0: boolean): void;
    setWithoutReturnType(arg0: boolean): void;
    setWithoutSuperTypes(arg0: boolean): void;
    setWithoutTypeParameters(arg0: boolean): void;
}
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { ConstructorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { MemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MemberDescriptor.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { PossiblyInnerType } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PossiblyInnerType.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { Annotated } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AnnotationUseSiteTarget } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationUseSiteTarget.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { AnnotationArgumentsRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/AnnotationArgumentsRenderingPolicy.d.ts'
import type { ClassifierNamePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ClassifierNamePolicy.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRenderer$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer$Companion.d.ts'
import type { DescriptorRenderer$ValueParametersHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer$ValueParametersHandler.d.ts'
import type { DescriptorRendererModifier } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererModifier.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { DescriptorRendererOptionsImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptionsImpl.d.ts'
import type { OverrideRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/OverrideRenderingPolicy.d.ts'
import type { ParameterNameRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ParameterNameRenderingPolicy.d.ts'
import type { PropertyAccessorRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/PropertyAccessorRenderingPolicy.d.ts'
import type { RenderingFormat } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/RenderingFormat.d.ts'
import type { ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { AbbreviatedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbbreviatedType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class DescriptorRendererImpl extends DescriptorRenderer implements DescriptorRendererOptions {
    static COMPACT: DescriptorRenderer;
    static COMPACT_WITHOUT_SUPERTYPES: DescriptorRenderer;
    static COMPACT_WITH_MODIFIERS: DescriptorRenderer;
    static COMPACT_WITH_SHORT_TYPES: DescriptorRenderer;
    static Companion: DescriptorRenderer$Companion;
    static DEBUG_TEXT: DescriptorRenderer;
    static FQ_NAMES_IN_TYPES: DescriptorRenderer;
    static FQ_NAMES_IN_TYPES_WITH_ANNOTATIONS: DescriptorRenderer;
    static HTML: DescriptorRenderer;
    static ONLY_NAMES_WITH_SHORT_TYPES: DescriptorRenderer;
    static SHORT_NAMES_IN_TYPES: DescriptorRenderer;
    static WITHOUT_MODIFIERS: DescriptorRenderer;
    constructor(arg0: DescriptorRendererOptionsImpl)
    // private functionTypeAnnotationsRenderer$delegate: Lazy<Object>;
    readonly options: DescriptorRendererOptionsImpl;
    // private appendDefinedIn(arg0: StringBuilder, arg1: DeclarationDescriptor): void;
    // private appendTypeProjections(arg0: StringBuilder, arg1: TypeProjection[]): void;
    // private arrow(): string;
    // private escape(arg0: string): string;
    getActualPropertiesInPrimaryConstructor(): boolean;
    getAlwaysRenderModifiers(): boolean;
    getAnnotationArgumentsRenderingPolicy(): AnnotationArgumentsRenderingPolicy;
    getAnnotationFilter(): Function1<AnnotationDescriptor, boolean>;
    getBoldOnlyForNamesInHtml(): boolean;
    getClassWithPrimaryConstructor(): boolean;
    getClassifierNamePolicy(): ClassifierNamePolicy;
    getDebugMode(): boolean;
    getDefaultParameterValueRenderer(): Function1<ValueParameterDescriptor, string>;
    getEachAnnotationOnNewLine(): boolean;
    getEnhancedTypes(): boolean;
    getExcludedAnnotationClasses(): FqName[];
    getExcludedTypeAnnotationClasses(): FqName[];
    // private getFunctionTypeAnnotationsRenderer(): DescriptorRendererImpl;
    getIncludeAdditionalModifiers(): boolean;
    getIncludeAnnotationArguments(): boolean;
    getIncludeEmptyAnnotationArguments(): boolean;
    getIncludePropertyConstant(): boolean;
    getInformativeErrorType(): boolean;
    getModifiers(): DescriptorRendererModifier[];
    getNormalizedVisibilities(): boolean;
    getOptions(): DescriptorRendererOptionsImpl;
    getOverrideRenderingPolicy(): OverrideRenderingPolicy;
    getParameterNameRenderingPolicy(): ParameterNameRenderingPolicy;
    getParameterNamesInFunctionalTypes(): boolean;
    getPresentableUnresolvedTypes(): boolean;
    getPropertyAccessorRenderingPolicy(): PropertyAccessorRenderingPolicy;
    getReceiverAfterName(): boolean;
    getRenderAbbreviatedTypeComments(): boolean;
    getRenderCompanionObjectName(): boolean;
    getRenderConstructorDelegation(): boolean;
    getRenderConstructorKeyword(): boolean;
    getRenderDefaultAnnotationArguments(): boolean;
    getRenderDefaultModality(): boolean;
    getRenderDefaultVisibility(): boolean;
    getRenderPrimaryConstructorParametersAsProperties(): boolean;
    getRenderTypeExpansions(): boolean;
    getRenderUnabbreviatedType(): boolean;
    getSecondaryConstructorsAsPrimary(): boolean;
    getStartFromDeclarationKeyword(): boolean;
    getStartFromName(): boolean;
    getTextFormat(): RenderingFormat;
    getTypeNormalizer(): Function1<KotlinType, KotlinType>;
    getUninferredTypeParameterAsName(): boolean;
    getUnitReturnType(): boolean;
    getValueParametersHandler(): DescriptorRenderer$ValueParametersHandler;
    getVerbose(): boolean;
    getWithDefinedIn(): boolean;
    getWithSourceFileForTopLevel(): boolean;
    getWithoutReturnType(): boolean;
    getWithoutSuperTypes(): boolean;
    getWithoutTypeParameters(): boolean;
    // private gt(): string;
    // private hasModifiersOrAnnotations(arg0: KotlinType): boolean;
    // private implicitModalityWithoutExtensions(arg0: MemberDescriptor): Modality;
    // private isParameterName(arg0: AnnotationDescriptor): boolean;
    // private lt(): string;
    // private overridesSomething(arg0: CallableMemberDescriptor): boolean;
    render(arg0: DeclarationDescriptor): string;
    // private renderAbbreviatedTypeComment(arg0: StringBuilder, arg1: AbbreviatedType): void;
    // private renderAccessorModifiers(arg0: PropertyAccessorDescriptor, arg1: StringBuilder): void;
    // private renderAdditionalModifiers(arg0: FunctionDescriptor, arg1: StringBuilder): void;
    // private renderAndSortAnnotationArguments(arg0: AnnotationDescriptor): string[];
    renderAnnotation(arg0: AnnotationDescriptor, arg1: AnnotationUseSiteTarget): string;
    // private renderAnnotations(arg0: StringBuilder, arg1: Annotated, arg2: AnnotationUseSiteTarget): void;
    // private renderCapturedTypeParametersIfRequired(arg0: ClassifierDescriptorWithTypeParameters, arg1: StringBuilder): void;
    // private renderClass(arg0: ClassDescriptor, arg1: StringBuilder): void;
    // private renderClassKindPrefix(arg0: ClassDescriptor, arg1: StringBuilder): void;
    renderClassifierName(arg0: ClassifierDescriptor): string;
    // private renderCompanionObjectName(arg0: DeclarationDescriptor, arg1: StringBuilder): void;
    // private renderConstant(arg0: ConstantValue<Object>): string;
    // private renderConstructor(arg0: ConstructorDescriptor, arg1: StringBuilder): void;
    // private renderContextReceivers(arg0: ReceiverParameterDescriptor[], arg1: StringBuilder): void;
    // private renderDefaultType(arg0: StringBuilder, arg1: KotlinType): void;
    // private renderError(arg0: string): string;
    // private renderExpandedTypeComment(arg0: StringBuilder, arg1: AbbreviatedType): void;
    renderFlexibleType(arg0: string, arg1: string, arg2: KotlinBuiltIns): string;
    // private renderForReceiver(arg0: KotlinType, arg1: boolean): string;
    // private renderFqName(arg0: Name[]): string;
    renderFqName(arg0: FqNameUnsafe): string;
    // private renderFunction(arg0: FunctionDescriptor, arg1: StringBuilder): void;
    // private renderFunctionType(arg0: StringBuilder, arg1: KotlinType): void;
    // private renderInitializer(arg0: VariableDescriptor, arg1: StringBuilder): void;
    // private renderKeyword(arg0: string): string;
    // private renderMemberKind(arg0: CallableMemberDescriptor, arg1: StringBuilder): void;
    // private renderMemberModifiers(arg0: MemberDescriptor, arg1: StringBuilder): void;
    renderMessage(arg0: string): string;
    // private renderModality(arg0: Modality, arg1: StringBuilder, arg2: Modality): void;
    // private renderModalityForCallable(arg0: CallableMemberDescriptor, arg1: StringBuilder): void;
    // private renderModifier(arg0: StringBuilder, arg1: boolean, arg2: string): void;
    // private renderName(arg0: DeclarationDescriptor, arg1: StringBuilder, arg2: boolean): void;
    renderName(arg0: Name, arg1: boolean): string;
    // private renderNormalizedType(arg0: StringBuilder, arg1: KotlinType): void;
    // private renderNormalizedTypeAsIs(arg0: StringBuilder, arg1: KotlinType): void;
    // private renderOverride(arg0: CallableMemberDescriptor, arg1: StringBuilder): void;
    // private renderPackageFragment(arg0: PackageFragmentDescriptor, arg1: StringBuilder): void;
    // private renderPackageHeader(arg0: FqName, arg1: string, arg2: StringBuilder): void;
    // private renderPackageView(arg0: PackageViewDescriptor, arg1: StringBuilder): void;
    // private renderPossiblyInnerType(arg0: StringBuilder, arg1: PossiblyInnerType): void;
    // private renderProperty(arg0: PropertyDescriptor, arg1: StringBuilder): void;
    // private renderPropertyAnnotations(arg0: PropertyDescriptor, arg1: StringBuilder): void;
    // private renderReceiver(arg0: CallableDescriptor, arg1: StringBuilder): void;
    // private renderReceiverAfterName(arg0: CallableDescriptor, arg1: StringBuilder): void;
    // private renderSimpleType(arg0: StringBuilder, arg1: SimpleType): void;
    // private renderSpaceIfNeeded(arg0: StringBuilder): void;
    // private renderSuperTypes(arg0: ClassDescriptor, arg1: StringBuilder): void;
    // private renderSuspendModifier(arg0: FunctionDescriptor, arg1: StringBuilder): void;
    renderType(arg0: KotlinType): string;
    // private renderTypeAlias(arg0: TypeAliasDescriptor, arg1: StringBuilder): void;
    renderTypeArguments(arg0: TypeProjection[]): string;
    renderTypeConstructor(arg0: TypeConstructor): string;
    // private renderTypeConstructorAndArguments(arg0: StringBuilder, arg1: KotlinType, arg2: TypeConstructor): void;
    // private renderTypeParameter(arg0: TypeParameterDescriptor, arg1: StringBuilder, arg2: boolean): void;
    // private renderTypeParameterList(arg0: StringBuilder, arg1: TypeParameterDescriptor[]): void;
    // private renderTypeParameters(arg0: TypeParameterDescriptor[], arg1: StringBuilder, arg2: boolean): void;
    renderTypeProjection(arg0: TypeProjection): string;
    // private renderValVarPrefix(arg0: VariableDescriptor, arg1: StringBuilder, arg2: boolean): void;
    // private renderValueParameter(arg0: ValueParameterDescriptor, arg1: boolean, arg2: StringBuilder, arg3: boolean): void;
    // private renderValueParameters(arg0: E[], arg1: boolean, arg2: StringBuilder): void;
    // private renderVariable(arg0: VariableDescriptor, arg1: boolean, arg2: StringBuilder, arg3: boolean, arg4: boolean): void;
    // private renderVisibility(arg0: DescriptorVisibility, arg1: StringBuilder): boolean;
    // private renderWhereSuffix(arg0: TypeParameterDescriptor[], arg1: StringBuilder): void;
    setAnnotationArgumentsRenderingPolicy(arg0: AnnotationArgumentsRenderingPolicy): void;
    setClassifierNamePolicy(arg0: ClassifierNamePolicy): void;
    setDebugMode(arg0: boolean): void;
    setExcludedTypeAnnotationClasses(arg0: FqName[]): void;
    setModifiers(arg0: DescriptorRendererModifier[]): void;
    setParameterNameRenderingPolicy(arg0: ParameterNameRenderingPolicy): void;
    setReceiverAfterName(arg0: boolean): void;
    setRenderCompanionObjectName(arg0: boolean): void;
    setStartFromName(arg0: boolean): void;
    setTextFormat(arg0: RenderingFormat): void;
    setVerbose(arg0: boolean): void;
    setWithDefinedIn(arg0: boolean): void;
    setWithoutSuperTypes(arg0: boolean): void;
    setWithoutTypeParameters(arg0: boolean): void;
    // private shouldRenderAsPrettyFunctionType(arg0: KotlinType): boolean;
    // private shouldRenderParameterNames(arg0: boolean): boolean;
}
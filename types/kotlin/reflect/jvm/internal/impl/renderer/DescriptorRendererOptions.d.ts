import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { AnnotationArgumentsRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/AnnotationArgumentsRenderingPolicy.d.ts'
import type { ClassifierNamePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ClassifierNamePolicy.d.ts'
import type { DescriptorRendererModifier } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererModifier.d.ts'
import type { ParameterNameRenderingPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ParameterNameRenderingPolicy.d.ts'
import type { RenderingFormat } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/RenderingFormat.d.ts'
export interface DescriptorRendererOptions extends Object{
    getAnnotationArgumentsRenderingPolicy(): AnnotationArgumentsRenderingPolicy;
    getDebugMode(): boolean;
    getEnhancedTypes(): boolean;
    getExcludedTypeAnnotationClasses(): FqName[];
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
}
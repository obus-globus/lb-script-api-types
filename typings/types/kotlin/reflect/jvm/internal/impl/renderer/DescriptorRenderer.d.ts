import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AnnotationUseSiteTarget } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationUseSiteTarget.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorRenderer$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer$Companion.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export abstract class DescriptorRenderer extends Object {
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
    constructor()
    render(arg0: DeclarationDescriptor): string;
    renderAnnotation(arg0: AnnotationDescriptor, arg1: AnnotationUseSiteTarget): string;
    renderFlexibleType(arg0: string, arg1: string, arg2: KotlinBuiltIns): string;
    renderFqName(arg0: FqNameUnsafe): string;
    renderName(arg0: Name, arg1: boolean): string;
    renderType(arg0: KotlinType): string;
    renderTypeProjection(arg0: TypeProjection): string;
    withOptions(arg0: (param0: DescriptorRendererOptions) => void): DescriptorRenderer;
}
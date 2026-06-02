import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { FlexibleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeWithEnhancement } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeWithEnhancement.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class FlexibleTypeWithEnhancement extends FlexibleType implements TypeWithEnhancement {
    constructor(arg0: FlexibleType, arg1: KotlinType)
    readonly enhancement: KotlinType;
    readonly origin: FlexibleType;
    getDelegate(): SimpleType;
    getEnhancement(): KotlinType;
    getOrigin(): FlexibleType;
    makeNullableAsSpecified(arg0: boolean): UnwrappedType;
    refine(arg0: KotlinTypeRefiner): FlexibleTypeWithEnhancement;
    render(arg0: DescriptorRenderer, arg1: DescriptorRendererOptions): string;
    replaceAttributes(arg0: TypeAttribute<Object>[]): UnwrappedType;
    toString(): string;
}
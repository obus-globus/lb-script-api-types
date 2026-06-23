import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { FlexibleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { DynamicTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/DynamicTypeMarker.d.ts'
export class DynamicType extends FlexibleType implements DynamicTypeMarker {
    constructor(arg0: KotlinBuiltIns, arg1: TypeAttribute<any>[])
    readonly attributes: TypeAttribute<any>[];
    getAttributes(): TypeAttribute<any>[];
    getDelegate(): SimpleType;
    isMarkedNullable(): boolean;
    makeNullableAsSpecified(arg0: boolean): DynamicType;
    refine(arg0: KotlinTypeRefiner): DynamicType;
    render(arg0: DescriptorRenderer, arg1: DescriptorRendererOptions): string;
    replaceAttributes(arg0: TypeAttribute<any>[]): DynamicType;
}
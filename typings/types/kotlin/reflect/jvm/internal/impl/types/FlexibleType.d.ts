import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { FlexibleTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
export abstract class FlexibleType extends UnwrappedType implements FlexibleTypeMarker {
    constructor(arg0: SimpleType, arg1: SimpleType)
    readonly lowerBound: SimpleType;
    readonly upperBound: SimpleType;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<Object>[];
    getConstructor(): TypeConstructor;
    getDelegate(): SimpleType;
    getLowerBound(): SimpleType;
    getMemberScope(): MemberScope;
    getUpperBound(): SimpleType;
    isMarkedNullable(): boolean;
    render(arg0: DescriptorRenderer, arg1: DescriptorRendererOptions): string;
    toString(): string;
}
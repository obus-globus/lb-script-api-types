import type { DescriptorRenderer } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { MemberScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { FlexibleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleType.d.ts'
import type { RawType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/RawType.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class RawTypeImpl extends FlexibleType implements RawType {
    constructor(arg0: SimpleType, arg1: SimpleType)
    getDelegate(): SimpleType;
    getMemberScope(): MemberScope;
    makeNullableAsSpecified(arg0: boolean): RawTypeImpl;
    refine(arg0: KotlinTypeRefiner): FlexibleType;
    render(arg0: DescriptorRenderer, arg1: DescriptorRendererOptions): string;
    replaceAttributes(arg0: TypeAttribute<any>[]): RawTypeImpl;
}
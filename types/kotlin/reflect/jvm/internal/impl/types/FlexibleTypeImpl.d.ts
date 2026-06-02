import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
import type { CustomTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/CustomTypeParameter.d.ts'
import type { FlexibleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleType.d.ts'
import type { FlexibleTypeImpl$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleTypeImpl$Companion.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class FlexibleTypeImpl extends FlexibleType implements CustomTypeParameter {
    static Companion: FlexibleTypeImpl$Companion;
    static RUN_SLOW_ASSERTIONS: boolean;
    constructor(arg0: SimpleType, arg1: SimpleType)
    // private assertionsDone: boolean;
    getDelegate(): SimpleType;
    isTypeParameter(): boolean;
    makeNullableAsSpecified(arg0: boolean): UnwrappedType;
    refine(arg0: KotlinTypeRefiner): FlexibleType;
    render(arg0: DescriptorRenderer, arg1: DescriptorRendererOptions): string;
    replaceAttributes(arg0: TypeAttribute<Object>[]): UnwrappedType;
    // private runAssertions(): void;
    substitutionResult(arg0: KotlinType): KotlinType;
    toString(): string;
}
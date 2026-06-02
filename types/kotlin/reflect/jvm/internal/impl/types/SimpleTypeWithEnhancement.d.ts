import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DelegatingSimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeWithEnhancement } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeWithEnhancement.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class SimpleTypeWithEnhancement extends DelegatingSimpleType implements TypeWithEnhancement {
    constructor(arg0: SimpleType, arg1: KotlinType)
    // private delegate: SimpleType;
    readonly enhancement: KotlinType;
    getDelegate(): SimpleType;
    getEnhancement(): KotlinType;
    getOrigin(): SimpleType;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    refine(arg0: KotlinTypeRefiner): SimpleTypeWithEnhancement;
    replaceAttributes(arg0: TypeAttribute<Object>[]): SimpleType;
    replaceDelegate(arg0: SimpleType): SimpleTypeWithEnhancement;
    toString(): string;
}
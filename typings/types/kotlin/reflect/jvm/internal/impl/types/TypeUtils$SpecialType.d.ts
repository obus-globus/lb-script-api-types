import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DelegatingSimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class TypeUtils$SpecialType extends DelegatingSimpleType {
    constructor(arg0: string)
    // private name: string;
    getDelegate(): SimpleType;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    refine(arg0: KotlinTypeRefiner): TypeUtils$SpecialType;
    replaceAttributes(arg0: TypeAttribute<Object>[]): SimpleType;
    replaceDelegate(arg0: SimpleType): DelegatingSimpleType;
    toString(): string;
}
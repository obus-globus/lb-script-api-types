import type { DelegatingSimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class AbbreviatedType extends DelegatingSimpleType {
    constructor(arg0: SimpleType, arg1: SimpleType)
    readonly abbreviation: SimpleType;
    // private delegate: SimpleType;
    getAbbreviation(): SimpleType;
    getDelegate(): SimpleType;
    getExpandedType(): SimpleType;
    makeNullableAsSpecified(arg0: boolean): AbbreviatedType;
    refine(arg0: KotlinTypeRefiner): AbbreviatedType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
    replaceDelegate(arg0: SimpleType): AbbreviatedType;
}
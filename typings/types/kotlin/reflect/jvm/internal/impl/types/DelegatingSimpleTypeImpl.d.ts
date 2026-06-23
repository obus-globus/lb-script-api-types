import type { DelegatingSimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export abstract class DelegatingSimpleTypeImpl extends DelegatingSimpleType {
    constructor(arg0: SimpleType)
    // private delegate: SimpleType;
    getDelegate(): SimpleType;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
}
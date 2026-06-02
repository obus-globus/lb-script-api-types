import type { DelegatingSimpleTypeImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleTypeImpl.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class NullableSimpleType extends DelegatingSimpleTypeImpl {
    constructor(arg0: SimpleType)
    isMarkedNullable(): boolean;
    replaceDelegate(arg0: SimpleType): NullableSimpleType;
}
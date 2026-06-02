import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DelegatingSimpleTypeImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleTypeImpl.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class SimpleTypeWithAttributes extends DelegatingSimpleTypeImpl {
    constructor(arg0: SimpleType, arg1: TypeAttribute<Object>[])
    readonly attributes: TypeAttribute<Object>[];
    getAttributes(): TypeAttribute<Object>[];
    replaceDelegate(arg0: SimpleType): SimpleTypeWithAttributes;
}
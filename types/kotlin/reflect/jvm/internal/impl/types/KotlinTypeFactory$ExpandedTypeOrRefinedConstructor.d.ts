import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class KotlinTypeFactory$ExpandedTypeOrRefinedConstructor extends Object {
    constructor(arg0: SimpleType, arg1: TypeConstructor)
    readonly expandedType: SimpleType;
    readonly refinedConstructor: TypeConstructor;
    getExpandedType(): SimpleType;
    getRefinedConstructor(): TypeConstructor;
}
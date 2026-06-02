import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClassifier } from '../../../../kotlin/reflect/KClassifier.d.ts'
import type { FqName } from '../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { TypeConstructorMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export class KTypeAliasImpl extends Object implements KClassifier, TypeConstructorMarker {
    constructor(fqName: FqName)
}
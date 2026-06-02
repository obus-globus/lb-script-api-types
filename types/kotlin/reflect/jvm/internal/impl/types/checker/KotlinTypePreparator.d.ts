import type { AbstractTypePreparator } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypePreparator.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export abstract class KotlinTypePreparator extends AbstractTypePreparator {
    constructor()
    prepareType(arg0: KotlinTypeMarker): UnwrappedType;
    // private transformToNewType(arg0: SimpleType): SimpleType;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export abstract class AbstractTypePreparator extends Object {
    constructor()
    prepareType(arg0: KotlinTypeMarker): KotlinTypeMarker;
}
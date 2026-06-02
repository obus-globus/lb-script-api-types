import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export abstract class AbstractTypeRefiner extends Object {
    constructor()
    refineType(arg0: KotlinTypeMarker): KotlinTypeMarker;
}
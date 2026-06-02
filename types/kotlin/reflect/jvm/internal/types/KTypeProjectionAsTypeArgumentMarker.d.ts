import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { TypeArgumentMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
export class KTypeProjectionAsTypeArgumentMarker extends Object implements TypeArgumentMarker {
    constructor(value: KTypeProjection)
    readonly value: KTypeProjection;
}
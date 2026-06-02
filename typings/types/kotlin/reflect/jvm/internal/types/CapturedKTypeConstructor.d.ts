import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
export class CapturedKTypeConstructor extends Object implements CapturedTypeConstructorMarker {
    constructor(projection: KTypeProjection)
    readonly projection: KTypeProjection;
    supertypes: KType[];
    toString(): string;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
export interface CapturedTypeConstructor extends Object, TypeConstructor, CapturedTypeConstructorMarker{
    getProjection(): TypeProjection;
}
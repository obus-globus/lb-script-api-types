import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
import type { TypeSystemCommonBackendContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSystemCommonBackendContext.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export class TypeEnhancementUtilsKt extends Object {
    static computeQualifiersForOverride(paramarg0: JavaTypeQualifiers, paramarg1: E[], paramarg2: boolean, paramarg3: boolean, paramarg4: boolean): JavaTypeQualifiers;
    static hasEnhancedNullability(paramarg0: TypeSystemCommonBackendContext, paramarg1: KotlinTypeMarker): boolean;
}
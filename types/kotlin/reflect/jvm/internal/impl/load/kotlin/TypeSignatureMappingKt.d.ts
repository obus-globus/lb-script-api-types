import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmTypeFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmTypeFactory.d.ts'
import type { TypeMappingMode } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingMode.d.ts'
import type { TypeSystemCommonBackendContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSystemCommonBackendContext.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export class TypeSignatureMappingKt extends Object {
    static boxTypeIfNeeded(paramarg0: JvmTypeFactory<Object>, paramarg1: Object | null, paramarg2: boolean): Object | null;
    static mapBuiltInType(paramarg0: TypeSystemCommonBackendContext, paramarg1: KotlinTypeMarker, paramarg2: JvmTypeFactory<Object>, paramarg3: TypeMappingMode): Object | null;
}
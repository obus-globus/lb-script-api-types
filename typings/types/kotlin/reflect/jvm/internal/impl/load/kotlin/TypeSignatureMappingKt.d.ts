import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmTypeFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmTypeFactory.d.ts'
import type { TypeMappingMode } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingMode.d.ts'
import type { TypeSystemCommonBackendContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSystemCommonBackendContext.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export class TypeSignatureMappingKt extends Object {
    static boxTypeIfNeeded<T extends unknown>(paramarg0: JvmTypeFactory<T>, paramarg1: T, paramarg2: boolean): T;
    static mapBuiltInType<T extends unknown>(paramarg0: TypeSystemCommonBackendContext, paramarg1: KotlinTypeMarker, paramarg2: JvmTypeFactory<T>, paramarg3: TypeMappingMode): T;
}
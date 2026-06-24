import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { TypeAdapters$FactorySupplier } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/TypeAdapters$FactorySupplier.d.ts'
import type { LocalTime } from '../../../../../../../java/time/LocalTime.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JavaTimeTypeAdapters extends Object implements TypeAdapters$FactorySupplier {
    static LOCAL_TIME: TypeAdapter<LocalTime>;
    constructor()
    get(): TypeAdapterFactory;
}
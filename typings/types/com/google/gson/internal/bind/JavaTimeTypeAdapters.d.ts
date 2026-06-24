import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { TypeAdapters$FactorySupplier } from '../../../../../com/google/gson/internal/bind/TypeAdapters$FactorySupplier.d.ts'
import type { LocalTime } from '../../../../../java/time/LocalTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JavaTimeTypeAdapters extends Object implements TypeAdapters$FactorySupplier {
    static LOCAL_TIME: TypeAdapter<LocalTime>;
    constructor()
    get(): TypeAdapterFactory;
}
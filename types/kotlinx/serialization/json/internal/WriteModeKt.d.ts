import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { WriteMode } from '../../../../kotlinx/serialization/json/internal/WriteMode.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class WriteModeKt extends Object {
    static carrierDescriptor(paramarg0: SerialDescriptor, paramarg1: SerializersModule): SerialDescriptor;
    static selectMapMode(paramarg0: Json, paramarg1: SerialDescriptor, paramarg2: Function0<Object>, paramarg3: Function0<Object>): Object | null;
    static switchMode(paramarg0: Json, paramarg1: SerialDescriptor): WriteMode;
}
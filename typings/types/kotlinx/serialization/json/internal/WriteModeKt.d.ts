import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { WriteMode } from '../../../../kotlinx/serialization/json/internal/WriteMode.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class WriteModeKt extends Object {
    static carrierDescriptor(paramarg0: SerialDescriptor, paramarg1: SerializersModule): SerialDescriptor;
    static selectMapMode(paramarg0: Json, paramarg1: SerialDescriptor, paramarg2: () => Object | null, paramarg3: () => Object | null): Object | null;
    static switchMode(paramarg0: Json, paramarg1: SerialDescriptor): WriteMode;
}
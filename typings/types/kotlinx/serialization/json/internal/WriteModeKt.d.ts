import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { WriteMode } from '../../../../kotlinx/serialization/json/internal/WriteMode.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class WriteModeKt extends Object {
    static carrierDescriptor(self: SerialDescriptor, module: SerializersModule): SerialDescriptor;
    static selectMapMode<T extends unknown, R1 extends T, R2 extends T>(self: Json, mapDescriptor: SerialDescriptor, ifMap: () => R1, ifList: () => R2): T;
    static switchMode(self: Json, desc: SerialDescriptor): WriteMode;
}
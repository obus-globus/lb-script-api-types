import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractEncoder } from '../../../kotlinx/serialization/encoding/AbstractEncoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class NoOpEncoder extends AbstractEncoder {
    static INSTANCE: NoOpEncoder;
    readonly serializersModule: SerializersModule;
    encodeBoolean(value: boolean): void;
    encodeByte(value: number): void;
    encodeChar(value: string): void;
    encodeDouble(value: number): void;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeInt(value: number): void;
    encodeLong(value: number): void;
    encodeNull(): void;
    encodeShort(value: number): void;
    encodeString(value: string): void;
    encodeValue(value: Object): void;
}
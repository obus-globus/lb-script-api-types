import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Cbor } from '../../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { CborEncoder } from '../../../../kotlinx/serialization/cbor/CborEncoder.d.ts'
import type { ByteArrayOutput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayOutput.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractEncoder } from '../../../../kotlinx/serialization/encoding/AbstractEncoder.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class CborWriter extends AbstractEncoder implements CborEncoder {
    protected constructor(cbor: Cbor, output: ByteArrayOutput)
    readonly cbor: Cbor;
    // private encodeByteArrayAsByteString: boolean;
    // private /*not mapped: */ getEncodeByteArrayAsByteString(): boolean;
    // private isClass: boolean;
    // private /*not mapped: */ isClass(): boolean;
    // private output: ByteArrayOutput;
    // private /*not mapped: */ getOutput(): ByteArrayOutput;
    readonly serializersModule: SerializersModule;
    encodeBoolean(value: boolean): void;
    encodeByte(value: number): void;
    encodeChar(value: string): void;
    encodeDouble(value: number): void;
    encodeElement(descriptor: SerialDescriptor, index: number): boolean;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeInt(value: number): void;
    encodeLong(value: number): void;
    encodeNull(): void;
    encodeSerializableValue<T extends unknown>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeString(value: string): void;
    protected getDestination(): ByteArrayOutput;
    protected incrementChildren(): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractEncoder } from '../../../../kotlinx/serialization/encoding/AbstractEncoder.d.ts'
import type { CompositeEncoder } from '../../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonEncoder } from '../../../../kotlinx/serialization/json/JsonEncoder.d.ts'
import type { Composer } from '../../../../kotlinx/serialization/json/internal/Composer.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
import type { WriteMode } from '../../../../kotlinx/serialization/json/internal/WriteMode.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class StreamingJsonEncoder extends AbstractEncoder implements JsonEncoder {
    constructor(composer: Composer, json: Json, mode: WriteMode, modeReuseCache: (JsonEncoder | null)[] | null)
    constructor(output: InternalJsonWriter, json: Json, mode: WriteMode, modeReuseCache: (JsonEncoder | null)[])
    // private composer: Composer;
    // private configuration: JsonConfiguration;
    // private forceQuoting: boolean;
    readonly json: Json;
    // private mode: WriteMode;
    // private modeReuseCache: (JsonEncoder | null)[] | null;
    // private polymorphicDiscriminator: string | null;
    // private polymorphicSerialName: string | null;
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    // private composerAs<T extends Composer>(composerCreator: (param0: InternalJsonWriter, param1: boolean) => T): T;
    encodeBoolean(value: boolean): void;
    encodeByte(value: number): void;
    encodeChar(value: string): void;
    encodeDouble(value: number): void;
    encodeElement(descriptor: SerialDescriptor, index: number): boolean;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeInline(descriptor: SerialDescriptor): Encoder;
    encodeInt(value: number): void;
    encodeJsonElement(element: JsonElement): void;
    encodeLong(value: number): void;
    encodeNull(): void;
    encodeNullableSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeString(value: string): void;
    // private encodeTypeInfo(discriminator: string, serialName: string): void;
    endStructure(descriptor: SerialDescriptor): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}
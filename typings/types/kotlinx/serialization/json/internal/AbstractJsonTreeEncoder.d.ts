import type { AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1 } from '../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen$drawInventoryTag$1.d.ts'
import type { AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1 } from '../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen$drawInventoryTag$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { NamedValueEncoder } from '../../../../kotlinx/serialization/internal/NamedValueEncoder.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonEncoder } from '../../../../kotlinx/serialization/json/JsonEncoder.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class AbstractJsonTreeEncoder extends NamedValueEncoder implements JsonEncoder {
    protected constructor(json: Json, nodeConsumer: (param0: JsonElement) => void)
    // private configuration: JsonConfiguration;
    readonly json: Json;
    // private nodeConsumer: (param0: JsonElement) => void;
    // private /*not mapped: */ getNodeConsumer(): (param0: JsonElement) => void;
    // private polymorphicDiscriminator: string | null;
    // private polymorphicSerialName: string | null;
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    protected composeName(parentName: string, childName: string): string;
    protected elementName(descriptor: SerialDescriptor, index: number): string;
    encodeInline(descriptor: SerialDescriptor): Encoder;
    encodeJsonElement(element: JsonElement): void;
    encodeNotNullMark(): void;
    encodeNull(): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
    protected encodeTaggedBoolean(tag: string, value: boolean): void;
    protected encodeTaggedByte(tag: string, value: number): void;
    protected encodeTaggedChar(tag: string, value: string): void;
    protected encodeTaggedDouble(tag: string, value: number): void;
    protected encodeTaggedEnum(tag: string, enumDescriptor: SerialDescriptor, ordinal: number): void;
    protected encodeTaggedFloat(tag: string, value: number): void;
    protected encodeTaggedInline(tag: string, inlineDescriptor: SerialDescriptor): Encoder;
    protected encodeTaggedInt(tag: string, value: number): void;
    protected encodeTaggedLong(tag: string, value: number): void;
    protected encodeTaggedNull(tag: string): void;
    protected encodeTaggedShort(tag: string, value: number): void;
    protected encodeTaggedString(tag: string, value: string): void;
    protected encodeTaggedValue(tag: string, value: Object): void;
    protected endEncode(descriptor: SerialDescriptor): void;
    getCurrent(): JsonElement;
    // private inlineUnquotedLiteralEncoder(tag: string, inlineDescriptor: SerialDescriptor): AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1;
    // private inlineUnsignedNumberEncoder(tag: string): AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1;
    putElement(key: string, element: JsonElement): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}
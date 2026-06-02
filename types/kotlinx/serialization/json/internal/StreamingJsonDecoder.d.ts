import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { ChunkedDecoder } from '../../../../kotlinx/serialization/encoding/ChunkedDecoder.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Decoder } from '../../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
import type { JsonElementMarker } from '../../../../kotlinx/serialization/json/internal/JsonElementMarker.d.ts'
import type { StreamingJsonDecoder$DiscriminatorHolder } from '../../../../kotlinx/serialization/json/internal/StreamingJsonDecoder$DiscriminatorHolder.d.ts'
import type { WriteMode } from '../../../../kotlinx/serialization/json/internal/WriteMode.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class StreamingJsonDecoder extends AbstractDecoder implements ChunkedDecoder, JsonDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(json: Json, mode: WriteMode, lexer: AbstractJsonLexer, descriptor: SerialDescriptor, discriminatorHolder: StreamingJsonDecoder$DiscriminatorHolder | null)
    // private configuration: JsonConfiguration;
    // private currentIndex: number;
    // private discriminatorHolder: StreamingJsonDecoder$DiscriminatorHolder | null;
    // private elementMarker: JsonElementMarker | null;
    readonly json: Json;
    lexer: AbstractJsonLexer;
    // private mode: WriteMode;
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    // private checkLeadingComma(): void;
    // private coerceInputValue(descriptor: SerialDescriptor, index: number): boolean;
    decodeBoolean(): boolean;
    decodeByte(): number;
    decodeChar(): string;
    decodeDouble(): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeInline(descriptor: SerialDescriptor): Decoder;
    decodeInt(): number;
    decodeJsonElement(): JsonElement;
    // private decodeListIndex(): number;
    decodeLong(): number;
    // private decodeMapIndex(): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    // private decodeObjectIndex(descriptor: SerialDescriptor): number;
    decodeSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    decodeShort(): number;
    decodeString(): string;
    decodeStringChunked(consumeChunk: Function1<string, void>): void;
    // private decodeStringKey(): string;
    endStructure(descriptor: SerialDescriptor): void;
    // private handleUnknown(descriptor: SerialDescriptor, key: string): boolean;
    // private skipLeftoverElements(descriptor: SerialDescriptor): void;
}
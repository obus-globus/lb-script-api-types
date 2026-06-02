import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class JsonDecoderForUnsignedTypes extends AbstractDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(lexer: AbstractJsonLexer, json: Json)
    // private lexer: AbstractJsonLexer;
    readonly serializersModule: SerializersModule;
    decodeByte(): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeInt(): number;
    decodeLong(): number;
    decodeShort(): number;
}
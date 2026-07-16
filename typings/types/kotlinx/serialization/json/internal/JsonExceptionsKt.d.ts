import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonDecodingException } from '../../../../kotlinx/serialization/json/JsonDecodingException.d.ts'
import type { JsonEncodingException } from '../../../../kotlinx/serialization/json/JsonEncodingException.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
export class JsonExceptionsKt extends Object {
    static InvalidFloatingPointDecoded(self: JsonDecoder, value: Number, key: string, input: () => CharSequence): JsonDecodingException;
    static InvalidFloatingPointEncoded(value: Number, key: string | null): JsonEncodingException;
    static InvalidKeyKindException(keyDescriptor: SerialDescriptor): JsonEncodingException;
    static decodingExceptionOf(shortMessage: string): JsonDecodingException;
    static decodingExceptionOf(self: JsonDecoder, shortMessage: string, path: string | null, hint: string | null, input: () => CharSequence): JsonDecodingException;
    static decodingExceptionOf(self: AbstractJsonLexer, shortMessage: string, offset: number, path: string, hint: string | null, input: CharSequence): JsonDecodingException;
    static formatEncodingException(shortMessage: string, hint: string | null): string;
    static invalidTrailingComma(self: AbstractJsonLexer, entity: string): void;
    static minify(self: CharSequence, offset: number): CharSequence;
    static throwInvalidFloatingPointDecoded(self: AbstractJsonLexer, result: Number): void;
}
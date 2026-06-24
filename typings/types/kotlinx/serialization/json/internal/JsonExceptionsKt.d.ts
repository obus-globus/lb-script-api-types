import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonDecodingException } from '../../../../kotlinx/serialization/json/JsonDecodingException.d.ts'
import type { JsonEncodingException } from '../../../../kotlinx/serialization/json/JsonEncodingException.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
export class JsonExceptionsKt extends Object {
    static InvalidFloatingPointDecoded(paramarg0: JsonDecoder, paramarg1: Number, paramarg2: string, paramarg3: () => CharSequence): JsonDecodingException;
    static InvalidFloatingPointEncoded(paramarg0: Number, paramarg1: string): JsonEncodingException;
    static InvalidKeyKindException(paramarg0: SerialDescriptor): JsonEncodingException;
    static decodingExceptionOf(paramarg0: string): JsonDecodingException;
    static decodingExceptionOf(paramarg0: JsonDecoder, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: () => CharSequence): JsonDecodingException;
    static decodingExceptionOf(paramarg0: AbstractJsonLexer, paramarg1: string, paramarg2: number, paramarg3: string, paramarg4: string, paramarg5: CharSequence): JsonDecodingException;
    static formatEncodingException(paramarg0: string, paramarg1: string): string;
    static invalidTrailingComma(paramarg0: AbstractJsonLexer, paramarg1: string): void;
    static minify(paramarg0: CharSequence, paramarg1: number): CharSequence;
    static throwInvalidFloatingPointDecoded(paramarg0: AbstractJsonLexer, paramarg1: Number): void;
}
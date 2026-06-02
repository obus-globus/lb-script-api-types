import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
import type { JsonDecodingException } from '../../../../kotlinx/serialization/json/internal/JsonDecodingException.d.ts'
import type { JsonEncodingException } from '../../../../kotlinx/serialization/json/internal/JsonEncodingException.d.ts'
export class JsonExceptionsKt extends Object {
    static InvalidFloatingPointDecoded(paramarg0: Number, paramarg1: string, paramarg2: string): JsonDecodingException;
    static InvalidFloatingPointEncoded(paramarg0: Number, paramarg1: string): JsonEncodingException;
    static InvalidFloatingPointEncoded(paramarg0: Number, paramarg1: string, paramarg2: string): JsonEncodingException;
    static InvalidKeyKindException(paramarg0: SerialDescriptor): JsonEncodingException;
    static JsonDecodingException(paramarg0: number, paramarg1: string): JsonDecodingException;
    static JsonDecodingException(paramarg0: number, paramarg1: string, paramarg2: CharSequence): JsonDecodingException;
    static invalidTrailingComma(paramarg0: AbstractJsonLexer, paramarg1: string): void;
    static minify(paramarg0: CharSequence, paramarg1: number): CharSequence;
    static throwInvalidFloatingPointDecoded(paramarg0: AbstractJsonLexer, paramarg1: Number): void;
}
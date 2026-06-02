import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonPrimitive } from '../../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
import type { AbstractJsonLexer } from '../../../../kotlinx/serialization/json/internal/AbstractJsonLexer.d.ts'
export class JsonTreeReader extends Object {
    constructor(configuration: JsonConfiguration, lexer: AbstractJsonLexer)
    // private isLenient: boolean;
    // private lexer: AbstractJsonLexer;
    // private stackDepth: number;
    // private trailingCommaAllowed: boolean;
    read(): JsonElement;
    // private readArray(): JsonElement;
    // private readDeepRecursive(): JsonElement;
    // private readObject(): JsonElement;
    // private readObjectImpl(reader: Function0<JsonElement>): JsonObject;
    // private readValue(isString: boolean): JsonPrimitive;
}
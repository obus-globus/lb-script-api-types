import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { ReaderJsonLexer } from '../../../../kotlinx/serialization/json/internal/ReaderJsonLexer.d.ts'
export class JsonIteratorWsSeparated<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(json: Json, lexer: ReaderJsonLexer, deserializer: DeserializationStrategy<T>)
    // private deserializer: DeserializationStrategy<T>;
    // private json: Json;
    // private lexer: ReaderJsonLexer;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}
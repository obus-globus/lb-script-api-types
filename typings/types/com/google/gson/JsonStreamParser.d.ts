import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class JsonStreamParser extends Object implements Iterator<JsonElement> {
    constructor(arg0: Reader)
    constructor(arg0: string)
    // private lock: Object;
    // private parser: JsonReader;
    forEachRemaining(arg0: (param0: JsonElement) => void): void;
    hasNext(): boolean;
    next(): JsonElement;
    remove(): void;
}
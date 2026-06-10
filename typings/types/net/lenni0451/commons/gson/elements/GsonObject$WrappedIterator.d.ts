import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonObject$WrappedIterator extends Object implements Iterator<Map$Entry<string, GsonElement>> {
    constructor(arg0: Iterator<Map$Entry<string, JsonElement>>)
    // private iterator: Iterator<Map$Entry<string, JsonElement>>;
    forEachRemaining(arg0: (param0: Map$Entry<string, GsonElement>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, GsonElement>;
    remove(): void;
}
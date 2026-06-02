import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonArray$WrappedIterator extends Object implements Iterator<GsonElement> {
    constructor(arg0: Iterator<JsonElement>)
    // private iterator: Iterator<JsonElement>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): GsonElement;
    remove(): void;
}
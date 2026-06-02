import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export abstract class ParameterMap$ParameterMapIterator<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(null_: ParameterMap$ParameterMapIterator<T>)
    // private current: Map$Entry<string, Object>;
    // private i: Iterator<Map$Entry<string, Object>>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    nextEntry(): Map$Entry<string, Object>;
    remove(): void;
}
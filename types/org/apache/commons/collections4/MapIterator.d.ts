import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface MapIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, Iterator<K>{
    forEachRemaining(arg0: (param0: T) => void): void;
    getKey(): K;
    getValue(): V;
    hasNext(): boolean;
    next(): K;
    remove(): void;
    setValue(arg0: V): V;
}
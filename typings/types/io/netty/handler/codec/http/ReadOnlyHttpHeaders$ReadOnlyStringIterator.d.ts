import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ReadOnlyHttpHeaders$ReadOnlyStringIterator extends Object implements Iterator<Map$Entry<string, string>>, Map$Entry<string, string> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(null_: (Object | null)[], arg1: any)
    readonly key: string;
    readonly key: string;
    // private nextNameIndex: number;
    readonly value: string;
    readonly value: string;
    forEachRemaining(arg0: (param0: Map$Entry<string, string>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, string>;
    remove(): void;
    setValue(arg0: string): string;
    toString(): string;
}
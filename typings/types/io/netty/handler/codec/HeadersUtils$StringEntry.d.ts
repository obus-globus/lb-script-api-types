import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HeadersUtils$StringEntry extends Object implements Map$Entry<string, string> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(arg0: Map$Entry<CharSequence, CharSequence>)
    // private entry: Map$Entry<CharSequence, CharSequence>;
    readonly key: string;
    // private name: string;
    readonly value: string;
    readonly value: string;
    setValue(arg0: string): string;
    toString(): string;
}
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { ShortReferencePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortReferencePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2ReferenceLinkedOpenHashMap$MapEntry extends Object implements Short2ReferenceMap$Entry<V>, ShortReferencePair<V>, Map$Entry<number, V> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: number, paramarg1: Object | null): ShortReferencePair<Object>;
    constructor(null_: Short2ReferenceLinkedOpenHashMap$MapEntry)
    constructor(null_: Short2ReferenceLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first<V extends Object | number | string | boolean>(arg0: number): ShortReferencePair<V>;
    firstShort(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key<V extends Object | number | string | boolean>(arg0: number): ShortReferencePair<V>;
    keyShort(): number;
    left(): number;
    left<V extends Object | number | string | boolean>(arg0: number): ShortReferencePair<V>;
    leftShort(): number;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): ShortReferencePair<V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}
import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { IntIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIntPair.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Int2IntOpenHashMap$MapEntry extends Object implements Int2IntMap$Entry, IntIntPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: IntIntPair, param1: IntIntPair) => number;
    static of(paramarg0: number, paramarg1: number): IntIntPair;
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntIntPair;
    firstInt(): number;
    getIntKey(): number;
    getIntValue(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntIntPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntIntPair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): IntIntPair;
    secondInt(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntIntPair;
    valueInt(): number;
}
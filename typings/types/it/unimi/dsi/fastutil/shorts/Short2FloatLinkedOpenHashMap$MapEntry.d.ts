import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { ShortFloatPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortFloatPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2FloatLinkedOpenHashMap$MapEntry extends Object implements Short2FloatMap$Entry, ShortFloatPair, Map$Entry<number, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ShortFloatPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ShortFloatPair;
    constructor(null_: Short2FloatLinkedOpenHashMap$MapEntry)
    constructor(null_: Short2FloatLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortFloatPair;
    firstShort(): number;
    getFloatValue(): number;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortFloatPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortFloatPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ShortFloatPair;
    secondFloat(): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortFloatPair;
    valueFloat(): number;
}
import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { ReferenceBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ByteLinkedOpenHashMap$MapEntry extends Object implements Reference2ByteMap$Entry<K>, ReferenceBytePair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceBytePair<Object>;
    constructor(null_: Reference2ByteLinkedOpenHashMap$MapEntry)
    constructor(null_: Reference2ByteLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    right(arg0: number): ReferenceBytePair<K>;
    right(): number;
    right(arg0: number): ReferenceBytePair<K>;
    right(arg0: number): ReferenceBytePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ReferenceBytePair<K>;
    second(arg0: number): ReferenceBytePair<K>;
    secondByte(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceBytePair<K>;
    value(arg0: number): ReferenceBytePair<K>;
    valueByte(): number;
}
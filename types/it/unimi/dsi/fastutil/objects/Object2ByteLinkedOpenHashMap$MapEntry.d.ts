import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBytePair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Object2ByteLinkedOpenHashMap$MapEntry extends Object implements Object2ByteMap$Entry<K>, ObjectBytePair<K>, Map$Entry<K, number> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectBytePair<Object>;
    constructor(null_: Object2ByteLinkedOpenHashMap$MapEntry)
    constructor(null_: Object2ByteLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    right(arg0: number): ObjectBytePair<K>;
    right(): number;
    right(arg0: number): ObjectBytePair<K>;
    right(arg0: number): ObjectBytePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ObjectBytePair<K>;
    second(arg0: number): ObjectBytePair<K>;
    secondByte(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectBytePair<K>;
    value(arg0: number): ObjectBytePair<K>;
    valueByte(): number;
}
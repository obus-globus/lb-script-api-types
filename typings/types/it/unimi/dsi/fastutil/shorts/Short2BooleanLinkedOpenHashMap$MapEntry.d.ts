import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { ShortBooleanPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBooleanPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Short2BooleanLinkedOpenHashMap$MapEntry extends Object implements Short2BooleanMap$Entry, ShortBooleanPair, Map$Entry<number, boolean> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static lexComparator(): (param0: ShortBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): ShortBooleanPair;
    constructor(null_: Short2BooleanLinkedOpenHashMap$MapEntry)
    constructor(null_: Short2BooleanLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: number;
    readonly value: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortBooleanPair;
    firstShort(): number;
    getBooleanValue(): boolean;
    getShortKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortBooleanPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortBooleanPair;
    leftShort(): number;
    right(): boolean;
    right(arg0: boolean): ShortBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ShortBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ShortBooleanPair;
    valueBoolean(): boolean;
}
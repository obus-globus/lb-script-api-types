import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { IntBooleanPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Int2BooleanLinkedOpenHashMap$MapEntry extends Object implements Int2BooleanMap$Entry, IntBooleanPair, Map$Entry<number, boolean> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    getBooleanValue(): boolean;
    getIntKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntBooleanPair;
    leftInt(): number;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}
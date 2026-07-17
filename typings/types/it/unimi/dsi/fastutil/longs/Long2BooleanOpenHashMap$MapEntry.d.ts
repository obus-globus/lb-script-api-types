import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { LongBooleanPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Long2BooleanOpenHashMap$MapEntry extends Object implements Long2BooleanMap$Entry, LongBooleanPair, Map$Entry<number, boolean> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBooleanPair;
    firstLong(): number;
    getBooleanValue(): boolean;
    getLongKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBooleanPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBooleanPair;
    leftLong(): number;
    right(): boolean;
    right(arg0: boolean): LongBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): LongBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): LongBooleanPair;
    valueBoolean(): boolean;
}
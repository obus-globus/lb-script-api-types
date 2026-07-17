import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { DoubleBooleanPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Double2BooleanOpenCustomHashMap$MapEntry extends Object implements Double2BooleanMap$Entry, DoubleBooleanPair, Map$Entry<number, boolean> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleBooleanPair;
    firstDouble(): number;
    getBooleanValue(): boolean;
    getDoubleKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleBooleanPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleBooleanPair;
    leftDouble(): number;
    right(): boolean;
    right(arg0: boolean): DoubleBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): DoubleBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): DoubleBooleanPair;
    valueBoolean(): boolean;
}
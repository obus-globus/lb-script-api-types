import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { FloatBooleanPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Float2BooleanArrayMap$MapEntry extends Object implements Float2BooleanMap$Entry, FloatBooleanPair, Map$Entry<number, boolean> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatBooleanPair;
    firstFloat(): number;
    getBooleanValue(): boolean;
    getFloatKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatBooleanPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatBooleanPair;
    leftFloat(): number;
    right(): boolean;
    right(arg0: boolean): FloatBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): FloatBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): FloatBooleanPair;
    valueBoolean(): boolean;
}
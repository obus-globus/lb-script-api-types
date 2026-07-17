import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ByteBooleanPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Byte2BooleanArrayMap$MapEntry extends Object implements Byte2BooleanMap$Entry, ByteBooleanPair, Map$Entry<number, boolean> {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private index: number;
    getKey(): number;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteBooleanPair;
    firstByte(): number;
    getBooleanValue(): boolean;
    getByteKey(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteBooleanPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBooleanPair;
    leftByte(): number;
    right(): boolean;
    right(arg0: boolean): ByteBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ByteBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ByteBooleanPair;
    valueBoolean(): boolean;
}
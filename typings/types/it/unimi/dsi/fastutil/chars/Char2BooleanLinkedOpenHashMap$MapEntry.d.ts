import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { CharBooleanPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBooleanPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Char2BooleanLinkedOpenHashMap$MapEntry extends Object implements Char2BooleanMap$Entry, CharBooleanPair, Map$Entry<string, boolean> {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private index: number;
    getKey(): string;
    getValue(): boolean;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBooleanPair;
    firstChar(): string;
    getBooleanValue(): boolean;
    getCharKey(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBooleanPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBooleanPair;
    leftChar(): string;
    right(): boolean;
    right(arg0: boolean): CharBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): CharBooleanPair;
    secondBoolean(): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): CharBooleanPair;
    valueBoolean(): boolean;
}
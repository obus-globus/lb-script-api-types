import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanCharPair extends Pair<boolean, string>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, string>;
    first(arg0: boolean): BooleanCharPair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, string>;
    key(arg0: boolean): BooleanCharPair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, string>;
    left(): boolean;
    left(arg0: boolean): BooleanCharPair;
    leftBoolean(): boolean;
    right(arg0: string): Pair<boolean, string>;
    right(): string;
    right(arg0: string): BooleanCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<boolean, string>;
    second(arg0: string): BooleanCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<boolean, string>;
    value(arg0: string): BooleanCharPair;
    valueChar(): string;
}
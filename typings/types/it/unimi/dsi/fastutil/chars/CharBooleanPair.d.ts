import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharBooleanPair extends Pair<string, boolean>, Object{
    first(): string;
    first(arg0: string): Pair<string, boolean>;
    first(arg0: string): CharBooleanPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, boolean>;
    key(arg0: string): CharBooleanPair;
    keyChar(): string;
    left(arg0: string): Pair<string, boolean>;
    left(): string;
    left(arg0: string): CharBooleanPair;
    leftChar(): string;
    right(arg0: boolean): Pair<string, boolean>;
    right(): boolean;
    right(arg0: boolean): CharBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): Pair<string, boolean>;
    second(arg0: boolean): CharBooleanPair;
    secondBoolean(): boolean;
    value(): boolean;
    value(arg0: boolean): Pair<string, boolean>;
    value(arg0: boolean): CharBooleanPair;
    valueBoolean(): boolean;
}
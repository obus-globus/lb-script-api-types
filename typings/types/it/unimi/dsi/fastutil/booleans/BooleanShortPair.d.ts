import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanShortPair extends Pair<boolean, number>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, number>;
    first(arg0: boolean): BooleanShortPair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, number>;
    key(arg0: boolean): BooleanShortPair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, number>;
    left(): boolean;
    left(arg0: boolean): BooleanShortPair;
    leftBoolean(): boolean;
    right(arg0: number): Pair<boolean, number>;
    right(): number;
    right(arg0: number): BooleanShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): Pair<boolean, number>;
    second(arg0: number): BooleanShortPair;
    secondShort(): number;
    value(): number;
    value(arg0: number): Pair<boolean, number>;
    value(arg0: number): BooleanShortPair;
    valueShort(): number;
}
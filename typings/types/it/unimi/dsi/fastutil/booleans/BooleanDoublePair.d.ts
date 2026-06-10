import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanDoublePair extends Pair<boolean, number>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, number>;
    first(arg0: boolean): BooleanDoublePair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, number>;
    key(arg0: boolean): BooleanDoublePair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, number>;
    left(): boolean;
    left(arg0: boolean): BooleanDoublePair;
    leftBoolean(): boolean;
    right(arg0: number): Pair<boolean, number>;
    right(): number;
    right(arg0: number): BooleanDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): Pair<boolean, number>;
    second(arg0: number): BooleanDoublePair;
    secondDouble(): number;
    value(): number;
    value(arg0: number): Pair<boolean, number>;
    value(arg0: number): BooleanDoublePair;
    valueDouble(): number;
}
import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanLongPair extends Pair<boolean, number>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, number>;
    first(arg0: boolean): BooleanLongPair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, number>;
    key(arg0: boolean): BooleanLongPair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, number>;
    left(): boolean;
    left(arg0: boolean): BooleanLongPair;
    leftBoolean(): boolean;
    right(arg0: number): Pair<boolean, number>;
    right(): number;
    right(arg0: number): BooleanLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<boolean, number>;
    second(arg0: number): BooleanLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<boolean, number>;
    value(arg0: number): BooleanLongPair;
    valueLong(): number;
}
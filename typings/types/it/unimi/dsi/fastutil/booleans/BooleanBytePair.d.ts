import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBytePair extends Pair<boolean, number>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, number>;
    first(arg0: boolean): BooleanBytePair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, number>;
    key(arg0: boolean): BooleanBytePair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, number>;
    left(): boolean;
    left(arg0: boolean): BooleanBytePair;
    leftBoolean(): boolean;
    right(arg0: number): Pair<boolean, number>;
    right(): number;
    right(arg0: number): BooleanBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): Pair<boolean, number>;
    second(arg0: number): BooleanBytePair;
    secondByte(): number;
    value(): number;
    value(arg0: number): Pair<boolean, number>;
    value(arg0: number): BooleanBytePair;
    valueByte(): number;
}
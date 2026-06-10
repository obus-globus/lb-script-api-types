import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatBooleanPair extends Pair<number, boolean>, Object{
    first(): number;
    first(arg0: number): Pair<number, boolean>;
    first(arg0: number): FloatBooleanPair;
    firstFloat(): number;
    key(): number;
    key(arg0: number): Pair<number, boolean>;
    key(arg0: number): FloatBooleanPair;
    keyFloat(): number;
    left(arg0: number): Pair<number, boolean>;
    left(): number;
    left(arg0: number): FloatBooleanPair;
    leftFloat(): number;
    right(arg0: boolean): Pair<number, boolean>;
    right(): boolean;
    right(arg0: boolean): FloatBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): Pair<number, boolean>;
    second(arg0: boolean): FloatBooleanPair;
    secondBoolean(): boolean;
    value(): boolean;
    value(arg0: boolean): Pair<number, boolean>;
    value(arg0: boolean): FloatBooleanPair;
    valueBoolean(): boolean;
}
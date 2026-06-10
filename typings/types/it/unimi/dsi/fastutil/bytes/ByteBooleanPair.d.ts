import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBooleanPair extends Pair<number, boolean>, Object{
    first(): number;
    first(arg0: number): Pair<number, boolean>;
    first(arg0: number): ByteBooleanPair;
    firstByte(): number;
    key(): number;
    key(arg0: number): Pair<number, boolean>;
    key(arg0: number): ByteBooleanPair;
    keyByte(): number;
    left(arg0: number): Pair<number, boolean>;
    left(): number;
    left(arg0: number): ByteBooleanPair;
    leftByte(): number;
    right(arg0: boolean): Pair<number, boolean>;
    right(): boolean;
    right(arg0: boolean): ByteBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): Pair<number, boolean>;
    second(arg0: boolean): ByteBooleanPair;
    secondBoolean(): boolean;
    value(): boolean;
    value(arg0: boolean): Pair<number, boolean>;
    value(arg0: boolean): ByteBooleanPair;
    valueBoolean(): boolean;
}
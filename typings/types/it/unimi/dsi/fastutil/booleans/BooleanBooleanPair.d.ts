import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBooleanPair extends Pair<boolean, boolean>, Object{
    first(): boolean;
    first(arg0: boolean): Pair<boolean, boolean>;
    first(arg0: boolean): BooleanBooleanPair;
    firstBoolean(): boolean;
    key(): boolean;
    key(arg0: boolean): Pair<boolean, boolean>;
    key(arg0: boolean): BooleanBooleanPair;
    keyBoolean(): boolean;
    left(arg0: boolean): Pair<boolean, boolean>;
    left(): boolean;
    left(arg0: boolean): BooleanBooleanPair;
    leftBoolean(): boolean;
    right(arg0: boolean): Pair<boolean, boolean>;
    right(): boolean;
    right(arg0: boolean): BooleanBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): Pair<boolean, boolean>;
    second(arg0: boolean): BooleanBooleanPair;
    secondBoolean(): boolean;
    value(): boolean;
    value(arg0: boolean): Pair<boolean, boolean>;
    value(arg0: boolean): BooleanBooleanPair;
    valueBoolean(): boolean;
}
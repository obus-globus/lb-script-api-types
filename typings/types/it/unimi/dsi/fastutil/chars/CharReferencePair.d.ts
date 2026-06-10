import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharReferencePair<V extends Object | number | string | boolean> extends Pair<string, V>, Object{
    first(): string;
    first(arg0: string): Pair<string, V>;
    first(arg0: string): CharReferencePair<V>;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, V>;
    key(arg0: string): CharReferencePair<V>;
    keyChar(): string;
    left(arg0: string): Pair<string, V>;
    left(): string;
    left(arg0: string): CharReferencePair<V>;
    leftChar(): string;
    right(arg0: V): Pair<string, V>;
    second(): V;
    second(arg0: V): Pair<string, V>;
    value(): V;
    value(arg0: V): Pair<string, V>;
}
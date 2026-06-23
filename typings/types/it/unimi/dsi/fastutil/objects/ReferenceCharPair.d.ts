import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReferenceCharPair<K extends unknown> extends Pair<K, string>, Object{
    first(): K;
    first(arg0: K): Pair<K, string>;
    key(): K;
    key(arg0: K): Pair<K, string>;
    left(arg0: K): Pair<K, string>;
    right(arg0: string): Pair<K, string>;
    right(): string;
    right(arg0: string): ReferenceCharPair<K>;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<K, string>;
    second(arg0: string): ReferenceCharPair<K>;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<K, string>;
    value(arg0: string): ReferenceCharPair<K>;
    valueChar(): string;
}
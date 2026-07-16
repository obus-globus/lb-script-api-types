import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Triple } from '../kotlin/Triple.d.ts'
export class TuplesKt extends Object {
    static to<A extends unknown, B extends unknown>(self: A, that: B): Pair<A, B>;
    static toList<T extends unknown>(self: Pair<T, T>): T[];
    static toList<T extends unknown>(self: Triple<T, T, T>): T[];
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class AlphabeticIndex$Record<V extends unknown> extends Object {
    private constructor(arg0: CharSequence, arg1: V)
    readonly data: V;
    readonly name: CharSequence;
    getData(): V;
    getName(): CharSequence;
    toString(): string;
}
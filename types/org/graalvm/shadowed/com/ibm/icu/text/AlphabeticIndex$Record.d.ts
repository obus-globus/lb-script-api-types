import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class AlphabeticIndex$Record<V extends Object | number | string | boolean> extends Object {
    private constructor(name: CharSequence, data: V)
    readonly data: V;
    readonly name: CharSequence;
    getData(): V;
    getName(): CharSequence;
    toString(): string;
}
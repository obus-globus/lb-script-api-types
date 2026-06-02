import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Normalizer2Impl$UTF16Plus extends Object {
    static equal(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: CharSequence, paramarg4: number, paramarg5: number): boolean;
    static equal(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static isLeadSurrogate(paramarg0: number): boolean;
    static isSurrogate(paramarg0: number): boolean;
    static isSurrogateLead(paramarg0: number): boolean;
    static isTrailSurrogate(paramarg0: number): boolean;
    constructor()
}
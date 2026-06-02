import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class Normalizer2Impl$UTF16Plus extends Object {
    static equal(params1: CharSequence, paramstart1: number, paramlimit1: number, params2: CharSequence, paramstart2: number, paramlimit2: number): boolean;
    static equal(params1: CharSequence, params2: CharSequence): boolean;
    static isLeadSurrogate(paramc: number): boolean;
    static isSurrogate(paramc: number): boolean;
    static isSurrogateLead(paramc: number): boolean;
    static isTrailSurrogate(paramc: number): boolean;
    constructor()
}
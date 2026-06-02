import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { UVector64 } from '../../../../../com/ibm/icu/impl/coll/UVector64.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationFastLatinBuilder extends Object {
    constructor()
    // private ce0: number;
    // private ce1: number;
    // private charCEs: number[][];
    // private contractionCEs: UVector64;
    // private firstDigitPrimary: number;
    // private firstLatinPrimary: number;
    // private firstShortPrimary: number;
    // private headerLength: number;
    // private lastLatinPrimary: number;
    // private lastSpecialPrimaries: number[];
    // private miniCEs: string[];
    // private result: StringBuilder;
    // private shortPrimaryOverflow: boolean;
    // private uniqueCEs: UVector64;
    // private addContractionEntry(arg0: number, arg1: number, arg2: number): void;
    // private addUniqueCE(arg0: number): void;
    // private encodeCharCEs(): void;
    // private encodeContractions(): void;
    // private encodeTwoCEs(arg0: number, arg1: number): number;
    // private encodeUniqueCEs(): void;
    forData(arg0: CollationData): boolean;
    // private getCEs(arg0: CollationData): void;
    // private getCEsFromCE32(arg0: CollationData, arg1: number, arg2: number): boolean;
    // private getCEsFromContractionCE32(arg0: CollationData, arg1: number): boolean;
    getHeader(): string[];
    // private getMiniCE(arg0: number): number;
    getTable(): string[];
    // private inSameGroup(arg0: number, arg1: number): boolean;
    // private loadGroups(arg0: CollationData): boolean;
    // private resetCEs(): void;
}
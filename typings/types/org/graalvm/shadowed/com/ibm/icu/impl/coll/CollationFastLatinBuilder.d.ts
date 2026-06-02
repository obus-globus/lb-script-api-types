import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { UVector64 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector64.d.ts'
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
    // private addContractionEntry(x: number, cce0: number, cce1: number): void;
    // private addUniqueCE(ce: number): void;
    // private encodeCharCEs(): void;
    // private encodeContractions(): void;
    // private encodeTwoCEs(first: number, second: number): number;
    // private encodeUniqueCEs(): void;
    forData(data: CollationData): boolean;
    // private getCEs(data: CollationData): void;
    // private getCEsFromCE32(data: CollationData, c: number, ce32: number): boolean;
    // private getCEsFromContractionCE32(data: CollationData, ce32: number): boolean;
    getHeader(): string[];
    // private getMiniCE(ce: number): number;
    getTable(): string[];
    // private inSameGroup(p: number, q: number): boolean;
    // private loadGroups(data: CollationData): boolean;
    // private resetCEs(): void;
}
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { ContractionsAndExpansions$CESink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/ContractionsAndExpansions$CESink.d.ts'
export class ContractionsAndExpansions extends Object {
    constructor(con: string[], exp: string[], s: ContractionsAndExpansions$CESink, prefixes: boolean)
    // private addPrefixes: boolean;
    // private ces: number[];
    // private checkTailored: number;
    // private contractions: string[];
    // private data: CollationData;
    // private expansions: string[];
    // private ranges: string[];
    // private sink: ContractionsAndExpansions$CESink;
    // private suffix: string;
    // private tailored: string[];
    // private unreversedPrefix: StringBuilder;
    addExpansions(start: number, end: number): void;
    addStrings(start: number, end: number, set: string[]): void;
    // private enumCnERange(start: number, end: number, ce32: number, cne: ContractionsAndExpansions): void;
    forCodePoint(d: CollationData, c: number): void;
    forData(d: CollationData): void;
    // private handleCE32(start: number, end: number, ce32: number): void;
    handleContractions(start: number, end: number, ce32: number): void;
    // private handlePrefixes(start: number, end: number, ce32: number): void;
    // private resetPrefix(): void;
    // private setPrefix(pfx: CharSequence): void;
}
import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { ContractionsAndExpansions$CESink } from '../../../../../com/ibm/icu/impl/coll/ContractionsAndExpansions$CESink.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class ContractionsAndExpansions extends Object {
    constructor(arg0: string[], arg1: string[], arg2: ContractionsAndExpansions$CESink, arg3: boolean)
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
    addExpansions(arg0: number, arg1: number): void;
    addStrings(arg0: number, arg1: number, arg2: string[]): void;
    // private enumCnERange(arg0: number, arg1: number, arg2: number, arg3: ContractionsAndExpansions): void;
    forCodePoint(arg0: CollationData, arg1: number): void;
    forData(arg0: CollationData): void;
    // private handleCE32(arg0: number, arg1: number, arg2: number): void;
    handleContractions(arg0: number, arg1: number, arg2: number): void;
    // private handlePrefixes(arg0: number, arg1: number, arg2: number): void;
    // private resetPrefix(): void;
    // private setPrefix(arg0: CharSequence): void;
}
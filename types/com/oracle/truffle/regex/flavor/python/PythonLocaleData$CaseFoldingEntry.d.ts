import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class PythonLocaleData$CaseFoldingEntry extends Object implements Comparable<PythonLocaleData$CaseFoldingEntry> {
    constructor(character: number, mapping: number)
    // private character: number;
    // private mapping: number;
    compareTo(o: PythonLocaleData$CaseFoldingEntry): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}
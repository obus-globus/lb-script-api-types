import type { StandardPlural } from '../../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { ULocale } from '../../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StandardPluralRanges extends Object {
    static DEFAULT: StandardPluralRanges;
    static forLocale(paramarg0: ULocale): StandardPluralRanges;
    static forSet(paramarg0: string): StandardPluralRanges;
    static getSetForLocale(paramarg0: ULocale): string;
    private constructor()
    // private flatTriples: StandardPlural[];
    // private numTriples: number;
    // private addPluralRange(arg0: StandardPlural, arg1: StandardPlural, arg2: StandardPlural): void;
    resolve(arg0: StandardPlural, arg1: StandardPlural): StandardPlural;
    // private setCapacity(arg0: number): void;
}
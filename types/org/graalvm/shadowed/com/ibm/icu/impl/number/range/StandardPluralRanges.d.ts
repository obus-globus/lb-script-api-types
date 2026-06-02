import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { ULocale } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class StandardPluralRanges extends Object {
    static DEFAULT: StandardPluralRanges;
    static forLocale(paramlocale: ULocale): StandardPluralRanges;
    static forSet(paramset: string): StandardPluralRanges;
    static getSetForLocale(paramlocale: ULocale): string;
    private constructor()
    // private flatTriples: StandardPlural[];
    // private numTriples: number;
    // private addPluralRange(first: StandardPlural, second: StandardPlural, result: StandardPlural): void;
    resolve(first: StandardPlural, second: StandardPlural): StandardPlural;
    // private setCapacity(length: number): void;
}
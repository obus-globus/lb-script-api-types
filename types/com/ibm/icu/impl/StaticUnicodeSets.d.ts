import type { StaticUnicodeSets$Key } from '../../../../com/ibm/icu/impl/StaticUnicodeSets$Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StaticUnicodeSets extends Object {
    static chooseCurrency(paramarg0: string): StaticUnicodeSets$Key;
    static chooseFrom(paramarg0: string, paramarg1: StaticUnicodeSets$Key): StaticUnicodeSets$Key;
    static chooseFrom(paramarg0: string, paramarg1: StaticUnicodeSets$Key, paramarg2: StaticUnicodeSets$Key): StaticUnicodeSets$Key;
    static get(paramarg0: StaticUnicodeSets$Key): string[];
    constructor()
}
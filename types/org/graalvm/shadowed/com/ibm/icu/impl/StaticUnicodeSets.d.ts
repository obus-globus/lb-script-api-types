import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StaticUnicodeSets$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StaticUnicodeSets$Key.d.ts'
export class StaticUnicodeSets extends Object {
    static chooseCurrency(paramstr: string): StaticUnicodeSets$Key;
    static chooseFrom(paramstr: string, paramkey1: StaticUnicodeSets$Key): StaticUnicodeSets$Key;
    static chooseFrom(paramstr: string, paramkey1: StaticUnicodeSets$Key, paramkey2: StaticUnicodeSets$Key): StaticUnicodeSets$Key;
    static get(paramkey: StaticUnicodeSets$Key): string[];
    constructor()
}
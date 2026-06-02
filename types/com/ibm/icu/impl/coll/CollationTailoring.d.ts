import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { SharedObject$Reference } from '../../../../../com/ibm/icu/impl/coll/SharedObject$Reference.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationTailoring extends Object {
    constructor(arg0: SharedObject$Reference<CollationSettings>)
    actualLocale: ULocale;
    data: CollationData;
    maxExpansions: { [key: number]: number };
    // private ownedData: CollationData;
    readonly rules: string;
    // private rulesResource: UResourceBundle;
    settings: SharedObject$Reference<CollationSettings>;
    // private trie: (Object | null)[];
    // private unsafeBackwardSet: string[];
    version: number;
    ensureOwnedData(): void;
    getRules(): string;
    getUCAVersion(): number;
    setRules(arg0: string): void;
    setRulesResource(arg0: UResourceBundle): void;
    setVersion(arg0: number, arg1: number): void;
}
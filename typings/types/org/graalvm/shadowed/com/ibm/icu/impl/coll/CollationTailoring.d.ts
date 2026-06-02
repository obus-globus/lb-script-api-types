import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { SharedObject$Reference } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/SharedObject$Reference.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class CollationTailoring extends Object {
    constructor(baseSettings: SharedObject$Reference<CollationSettings>)
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
    setRules(r: string): void;
    setRulesResource(res: UResourceBundle): void;
    setVersion(baseVersion: number, rulesVersion: number): void;
}
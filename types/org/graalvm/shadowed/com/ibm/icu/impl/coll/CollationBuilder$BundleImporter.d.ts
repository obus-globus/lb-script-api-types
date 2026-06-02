import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationRuleParser$Importer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationRuleParser$Importer.d.ts'
export class CollationBuilder$BundleImporter extends Object implements CollationRuleParser$Importer {
    constructor()
    getRules(localeID: string, collationType: string): string;
}
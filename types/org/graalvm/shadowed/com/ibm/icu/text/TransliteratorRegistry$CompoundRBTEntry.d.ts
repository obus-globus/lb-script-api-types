import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RuleBasedTransliterator$Data } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
export class TransliteratorRegistry$CompoundRBTEntry extends Object {
    constructor(theID: string, theIDBlockVector: string[], theDataVector: RuleBasedTransliterator$Data[], theCompoundFilter: string[])
    // private ID: string;
    // private compoundFilter: string[];
    // private dataVector: RuleBasedTransliterator$Data[];
    // private idBlockVector: string[];
    getInstance(): Transliterator;
}
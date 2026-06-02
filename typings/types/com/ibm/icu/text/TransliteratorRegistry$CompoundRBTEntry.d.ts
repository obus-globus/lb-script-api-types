import type { RuleBasedTransliterator$Data } from '../../../../com/ibm/icu/text/RuleBasedTransliterator$Data.d.ts'
import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorRegistry$CompoundRBTEntry extends Object {
    constructor(arg0: string, arg1: string[], arg2: RuleBasedTransliterator$Data[], arg3: string[])
    // private ID: string;
    // private compoundFilter: string[];
    // private dataVector: RuleBasedTransliterator$Data[];
    // private idBlockVector: string[];
    getInstance(): Transliterator;
}
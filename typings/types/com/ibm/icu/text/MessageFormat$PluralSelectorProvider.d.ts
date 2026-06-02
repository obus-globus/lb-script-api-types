import type { MessageFormat } from '../../../../com/ibm/icu/text/MessageFormat.d.ts'
import type { PluralFormat$PluralSelector } from '../../../../com/ibm/icu/text/PluralFormat$PluralSelector.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessageFormat$PluralSelectorProvider extends Object implements PluralFormat$PluralSelector {
    constructor(arg0: MessageFormat, arg1: PluralRules$PluralType)
    // private msgFormat: MessageFormat;
    // private rules: PluralRules;
    // private type: PluralRules$PluralType;
    select(arg0: Object, arg1: number): string;
}
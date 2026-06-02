import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessageFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat.d.ts'
import type { PluralFormat$PluralSelector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat$PluralSelector.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
export class MessageFormat$PluralSelectorProvider extends Object implements PluralFormat$PluralSelector {
    constructor(mf: MessageFormat, type: PluralRules$PluralType)
    // private msgFormat: MessageFormat;
    // private rules: PluralRules;
    // private type: PluralRules$PluralType;
    select(ctx: Object, number: number): string;
}
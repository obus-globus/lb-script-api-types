import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat.d.ts'
import type { PluralFormat$PluralSelector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat$PluralSelector.d.ts'
export class PluralFormat$PluralSelectorAdapter extends Object implements PluralFormat$PluralSelector {
    private constructor(null_: PluralFormat)
    select(context: Object, number: number): string;
}
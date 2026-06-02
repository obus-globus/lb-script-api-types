import type { StandardPlural } from '../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { SimpleFormatter } from '../../../../com/ibm/icu/text/SimpleFormatter.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class QuantityFormatter extends Object {
    static format(paramarg0: string, paramarg1: CharSequence, paramarg2: StringBuilder, paramarg3: FieldPosition): StringBuilder;
    static selectPlural(paramarg0: number, paramarg1: NumberFormat, paramarg2: PluralRules): StandardPlural;
    constructor()
    // private templates: SimpleFormatter[];
    addIfAbsent(arg0: CharSequence, arg1: string): void;
    format(arg0: number, arg1: NumberFormat, arg2: PluralRules): string;
    getByVariant(arg0: CharSequence): SimpleFormatter;
    isValid(): boolean;
}
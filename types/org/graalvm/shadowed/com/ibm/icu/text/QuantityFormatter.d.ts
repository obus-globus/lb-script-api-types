import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { StandardPlural } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { SimpleFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SimpleFormatter.d.ts'
export class QuantityFormatter extends Object {
    static format(paramcompiledPattern: string, paramvalue: CharSequence, paramappendTo: StringBuilder, parampos: FieldPosition): StringBuilder;
    static selectPlural(paramnumber: number, paramnumberFormat: NumberFormat, paramrules: PluralRules): StandardPlural;
    constructor()
    // private templates: SimpleFormatter[];
    addIfAbsent(variant: CharSequence, template: string): void;
    format(number: number, numberFormat: NumberFormat, pluralRules: PluralRules): string;
    getByVariant(variant: CharSequence): SimpleFormatter;
    isValid(): boolean;
}
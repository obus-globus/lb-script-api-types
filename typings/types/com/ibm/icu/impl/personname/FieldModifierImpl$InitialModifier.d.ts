import type { FieldModifierImpl } from '../../../../../com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { SimpleFormatter } from '../../../../../com/ibm/icu/text/SimpleFormatter.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
export class FieldModifierImpl$InitialModifier extends FieldModifierImpl {
    static forName(paramarg0: PersonName$FieldModifier, paramarg1: PersonNameFormatterImpl): FieldModifierImpl;
    constructor(arg0: Locale, arg1: string, arg2: string)
    // private initialFormatter: SimpleFormatter;
    // private initialSequenceFormatter: SimpleFormatter;
    // private locale: Locale;
    readonly retainPunctuation: boolean;
    modifyField(arg0: string): string;
    setRetainPunctuation(arg0: boolean): void;
}
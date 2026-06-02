import type { FieldModifierImpl } from '../../../../../com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
export class FieldModifierImpl$AllCapsModifier extends FieldModifierImpl {
    static forName(paramarg0: PersonName$FieldModifier, paramarg1: PersonNameFormatterImpl): FieldModifierImpl;
    constructor(arg0: Locale)
    // private locale: Locale;
    modifyField(arg0: string): string;
}
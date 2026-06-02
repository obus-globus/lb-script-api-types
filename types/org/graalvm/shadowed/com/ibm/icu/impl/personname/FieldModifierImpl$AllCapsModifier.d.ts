import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { FieldModifierImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
export class FieldModifierImpl$AllCapsModifier extends FieldModifierImpl {
    static forName(parammodifierID: PersonName$FieldModifier, paramformatterImpl: PersonNameFormatterImpl): FieldModifierImpl;
    constructor(locale: Locale)
    // private locale: Locale;
    modifyField(fieldValue: string): string;
}
import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { FieldModifierImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/FieldModifierImpl.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { SimpleFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SimpleFormatter.d.ts'
export class FieldModifierImpl$InitialModifier extends FieldModifierImpl {
    static forName(parammodifierID: PersonName$FieldModifier, paramformatterImpl: PersonNameFormatterImpl): FieldModifierImpl;
    constructor(locale: Locale, initialPattern: string, initialSequencePattern: string)
    // private initialFormatter: SimpleFormatter;
    // private initialSequenceFormatter: SimpleFormatter;
    // private locale: Locale;
    readonly retainPunctuation: boolean;
    modifyField(fieldValue: string): string;
    setRetainPunctuation(retain: boolean): void;
}
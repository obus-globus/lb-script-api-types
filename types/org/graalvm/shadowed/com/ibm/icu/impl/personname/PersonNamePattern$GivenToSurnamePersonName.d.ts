import type { Locale } from '../../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
export class PersonNamePattern$GivenToSurnamePersonName extends Object implements PersonName {
    constructor(underlyingPersonName: PersonName)
    // private underlyingPersonName: PersonName;
    getFieldValue(identifier: PersonName$NameField, modifiers: PersonName$FieldModifier[]): string;
    getNameLocale(): Locale;
    getPreferredOrder(): PersonName$PreferredOrder;
    toString(): string;
}
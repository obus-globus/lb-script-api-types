import type { PersonName$FieldModifier } from '../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PersonName extends Object{
    getFieldValue(arg0: PersonName$NameField, arg1: PersonName$FieldModifier[]): string;
    getNameLocale(): Locale;
    getPreferredOrder(): PersonName$PreferredOrder;
}
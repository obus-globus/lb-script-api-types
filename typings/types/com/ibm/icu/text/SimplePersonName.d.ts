import type { PersonName } from '../../../../com/ibm/icu/text/PersonName.d.ts'
import type { PersonName$FieldModifier } from '../../../../com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
import type { SimplePersonName$Builder } from '../../../../com/ibm/icu/text/SimplePersonName$Builder.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimplePersonName extends Object implements PersonName {
    static builder(): SimplePersonName$Builder;
    private constructor(arg0: Locale, arg1: PersonName$PreferredOrder, arg2: { [key: string]: string })
    // private fieldValues: { [key: string]: string };
    readonly nameLocale: Locale;
    readonly preferredOrder: PersonName$PreferredOrder;
    getFieldValue(arg0: PersonName$NameField, arg1: PersonName$FieldModifier[]): string;
    getNameLocale(): Locale;
    getPreferredOrder(): PersonName$PreferredOrder;
    toString(): string;
}
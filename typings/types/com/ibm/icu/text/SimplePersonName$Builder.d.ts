import type { PersonName$NameField } from '../../../../com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
import type { SimplePersonName } from '../../../../com/ibm/icu/text/SimplePersonName.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimplePersonName$Builder extends Object {
    private constructor()
    // private fieldValues: { [key: string]: string };
    // private locale: Locale;
    // private preferredOrder: PersonName$PreferredOrder;
    addField(arg0: PersonName$NameField, arg1: E[], arg2: string): SimplePersonName$Builder;
    build(): SimplePersonName;
    setLocale(arg0: Locale): SimplePersonName$Builder;
    setPreferredOrder(arg0: PersonName$PreferredOrder): SimplePersonName$Builder;
}
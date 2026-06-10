import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
import type { SimplePersonName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SimplePersonName.d.ts'
export class SimplePersonName$Builder extends Object {
    private constructor()
    // private fieldValues: { [key: string]: string };
    // private locale: Locale;
    // private preferredOrder: PersonName$PreferredOrder;
    addField(field: PersonName$NameField, modifiers: PersonName$FieldModifier[], value: string): SimplePersonName$Builder;
    build(): SimplePersonName;
    setLocale(locale: Locale): SimplePersonName$Builder;
    setPreferredOrder(preferredOrder: PersonName$PreferredOrder): SimplePersonName$Builder;
}
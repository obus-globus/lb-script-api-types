import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PersonName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonName$FieldModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$FieldModifier.d.ts'
import type { PersonName$NameField } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$NameField.d.ts'
import type { PersonName$PreferredOrder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName$PreferredOrder.d.ts'
import type { SimplePersonName$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SimplePersonName$Builder.d.ts'
export class SimplePersonName extends Object implements PersonName {
    static builder(): SimplePersonName$Builder;
    private constructor(nameLocale: Locale, preferredOrder: PersonName$PreferredOrder, fieldValues: { [key: string]: string })
    // private fieldValues: { [key: string]: string };
    readonly nameLocale: Locale;
    readonly preferredOrder: PersonName$PreferredOrder;
    getFieldValue(nameField: PersonName$NameField, modifiers: PersonName$FieldModifier[]): string;
    getNameLocale(): Locale;
    getPreferredOrder(): PersonName$PreferredOrder;
    toString(): string;
}
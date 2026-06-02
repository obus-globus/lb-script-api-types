import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PersonNameFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
export class PersonNameFormatter$Builder extends Object {
    private constructor()
    // private displayOrder: PersonNameFormatter$DisplayOrder;
    // private formality: PersonNameFormatter$Formality;
    // private length: PersonNameFormatter$Length;
    // private locale: Locale;
    // private surnameAllCaps: boolean;
    // private usage: PersonNameFormatter$Usage;
    build(): PersonNameFormatter;
    setDisplayOrder(order: PersonNameFormatter$DisplayOrder): PersonNameFormatter$Builder;
    setFormality(formality: PersonNameFormatter$Formality): PersonNameFormatter$Builder;
    setLength(length: PersonNameFormatter$Length): PersonNameFormatter$Builder;
    setLocale(locale: Locale): PersonNameFormatter$Builder;
    setSurnameAllCaps(allCaps: boolean): PersonNameFormatter$Builder;
    setUsage(usage: PersonNameFormatter$Usage): PersonNameFormatter$Builder;
}
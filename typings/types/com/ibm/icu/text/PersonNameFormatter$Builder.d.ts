import type { PersonNameFormatter } from '../../../../com/ibm/icu/text/PersonNameFormatter.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PersonNameFormatter$Builder extends Object {
    private constructor()
    // private displayOrder: PersonNameFormatter$DisplayOrder;
    // private formality: PersonNameFormatter$Formality;
    // private length: PersonNameFormatter$Length;
    // private locale: Locale;
    // private surnameAllCaps: boolean;
    // private usage: PersonNameFormatter$Usage;
    build(): PersonNameFormatter;
    setDisplayOrder(arg0: PersonNameFormatter$DisplayOrder): PersonNameFormatter$Builder;
    setFormality(arg0: PersonNameFormatter$Formality): PersonNameFormatter$Builder;
    setLength(arg0: PersonNameFormatter$Length): PersonNameFormatter$Builder;
    setLocale(arg0: Locale): PersonNameFormatter$Builder;
    setSurnameAllCaps(arg0: boolean): PersonNameFormatter$Builder;
    setUsage(arg0: PersonNameFormatter$Usage): PersonNameFormatter$Builder;
}
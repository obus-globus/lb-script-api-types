import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Builder.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
export class PersonNameFormatter extends Object {
    static builder(): PersonNameFormatter$Builder;
    constructor(locale: Locale, gnFirstPatterns: string[], snFirstPatterns: string[], gnFirstLocales: string[], snFirstLocales: string[])
    private constructor(locale: Locale, length: PersonNameFormatter$Length, usage: PersonNameFormatter$Usage, formality: PersonNameFormatter$Formality, displayOrder: PersonNameFormatter$DisplayOrder, surnameAllCaps: boolean)
    // private impl: PersonNameFormatterImpl;
    formatToString(name: PersonName): string;
    toBuilder(): PersonNameFormatter$Builder;
    toString(): string;
}
import type { PersonNameFormatterImpl } from '../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName } from '../../../../com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$Builder } from '../../../../com/ibm/icu/text/PersonNameFormatter$Builder.d.ts'
import type { PersonNameFormatter$DisplayOrder } from '../../../../com/ibm/icu/text/PersonNameFormatter$DisplayOrder.d.ts'
import type { PersonNameFormatter$Formality } from '../../../../com/ibm/icu/text/PersonNameFormatter$Formality.d.ts'
import type { PersonNameFormatter$Length } from '../../../../com/ibm/icu/text/PersonNameFormatter$Length.d.ts'
import type { PersonNameFormatter$Usage } from '../../../../com/ibm/icu/text/PersonNameFormatter$Usage.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PersonNameFormatter extends Object {
    static builder(): PersonNameFormatter$Builder;
    private constructor(arg0: Locale, arg1: PersonNameFormatter$Length, arg2: PersonNameFormatter$Usage, arg3: PersonNameFormatter$Formality, arg4: PersonNameFormatter$DisplayOrder, arg5: boolean)
    constructor(arg0: Locale, arg1: string[], arg2: string[], arg3: string[], arg4: string[])
    // private impl: PersonNameFormatterImpl;
    formatToString(arg0: PersonName): string;
    toBuilder(): PersonNameFormatter$Builder;
    toString(): string;
}
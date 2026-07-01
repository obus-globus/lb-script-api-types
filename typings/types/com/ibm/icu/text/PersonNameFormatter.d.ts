import type { PersonNameFormatterImpl } from '../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName } from '../../../../com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$Builder } from '../../../../com/ibm/icu/text/PersonNameFormatter$Builder.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PersonNameFormatter extends Object {
    static builder(): PersonNameFormatter$Builder;
    constructor(arg0: Locale, arg1: string[], arg2: string[], arg3: string[], arg4: string[])
    // private impl: PersonNameFormatterImpl;
    formatToString(arg0: PersonName): string;
    toBuilder(): PersonNameFormatter$Builder;
    toString(): string;
}
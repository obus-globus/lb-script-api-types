import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonName } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
import type { PersonNameFormatter$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonNameFormatter$Builder.d.ts'
export class PersonNameFormatter extends Object {
    static builder(): PersonNameFormatter$Builder;
    constructor(locale: Locale, gnFirstPatterns: string[], snFirstPatterns: string[], gnFirstLocales: string[], snFirstLocales: string[])
    // private impl: PersonNameFormatterImpl;
    formatToString(name: PersonName): string;
    toBuilder(): PersonNameFormatter$Builder;
    toString(): string;
}
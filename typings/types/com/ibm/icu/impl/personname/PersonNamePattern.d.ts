import type { PersonNameFormatterImpl } from '../../../../../com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonNamePattern$Element } from '../../../../../com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../com/ibm/icu/text/PersonName.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PersonNamePattern extends Object {
    static makePatterns(paramarg0: string[], paramarg1: PersonNameFormatterImpl): PersonNamePattern[];
    private constructor(arg0: string, arg1: PersonNameFormatterImpl)
    // private patternElements: PersonNamePattern$Element[];
    // private patternText: string;
    // private coalesce(arg0: StringBuilder, arg1: StringBuilder): string;
    // private endsWith(arg0: StringBuilder, arg1: StringBuilder): boolean;
    format(arg0: PersonName): string;
    // private hackNameForEmptyFields(arg0: PersonName): PersonName;
    numEmptyFields(arg0: PersonName): number;
    numPopulatedFields(arg0: PersonName): number;
    toString(): string;
}
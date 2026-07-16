import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PersonNameFormatterImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNameFormatterImpl.d.ts'
import type { PersonNamePattern$Element } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
export class PersonNamePattern extends Object {
    static makePatterns(parampatternText: string[], paramformatterImpl: PersonNameFormatterImpl): PersonNamePattern[];
    private constructor(patternText: string, formatterImpl: PersonNameFormatterImpl)
    // private patternElements: PersonNamePattern$Element[];
    // private patternText: string;
    // private coalesce(s1: StringBuilder, s2: StringBuilder): string;
    // private endsWith(s1: StringBuilder, s2: StringBuilder): boolean;
    format(name: PersonName): string;
    // private hackNameForEmptyFields(originalName: PersonName): PersonName;
    numEmptyFields(name: PersonName): number;
    numPopulatedFields(name: PersonName): number;
    toString(): string;
}
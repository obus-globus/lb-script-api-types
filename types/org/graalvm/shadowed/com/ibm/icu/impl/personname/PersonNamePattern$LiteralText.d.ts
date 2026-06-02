import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PersonNamePattern$Element } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
export class PersonNamePattern$LiteralText extends Object implements PersonNamePattern$Element {
    constructor(text: string)
    // private text: string;
    format(name: PersonName): string;
    isLiteral(): boolean;
    isPopulated(name: PersonName): boolean;
    toString(): string;
}
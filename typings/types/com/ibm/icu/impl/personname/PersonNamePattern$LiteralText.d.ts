import type { PersonNamePattern$Element } from '../../../../../com/ibm/icu/impl/personname/PersonNamePattern$Element.d.ts'
import type { PersonName } from '../../../../../com/ibm/icu/text/PersonName.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PersonNamePattern$LiteralText extends Object implements PersonNamePattern$Element {
    constructor(arg0: string)
    // private text: string;
    format(arg0: PersonName): string;
    isLiteral(): boolean;
    isPopulated(arg0: PersonName): boolean;
    toString(): string;
}
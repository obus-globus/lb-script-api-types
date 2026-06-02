import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PersonName } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PersonName.d.ts'
export interface PersonNamePattern$Element extends Object{
    format(name: PersonName): string;
    isLiteral(): boolean;
    isPopulated(name: PersonName): boolean;
}
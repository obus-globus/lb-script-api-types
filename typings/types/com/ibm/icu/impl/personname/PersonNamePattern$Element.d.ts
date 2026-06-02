import type { PersonName } from '../../../../../com/ibm/icu/text/PersonName.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PersonNamePattern$Element extends Object{
    format(arg0: PersonName): string;
    isLiteral(): boolean;
    isPopulated(arg0: PersonName): boolean;
}
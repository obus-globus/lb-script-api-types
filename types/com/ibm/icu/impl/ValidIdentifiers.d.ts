import type { ValidIdentifiers$Datasubtype } from '../../../../com/ibm/icu/impl/ValidIdentifiers$Datasubtype.d.ts'
import type { ValidIdentifiers$Datatype } from '../../../../com/ibm/icu/impl/ValidIdentifiers$Datatype.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ValidIdentifiers extends Object {
    static getData(): { [key in ValidIdentifiers$Datatype]: Object | null };
    static isValid(paramarg0: ValidIdentifiers$Datatype, paramarg1: ValidIdentifiers$Datasubtype[], paramarg2: string): ValidIdentifiers$Datasubtype;
    static isValid(paramarg0: ValidIdentifiers$Datatype, paramarg1: ValidIdentifiers$Datasubtype[], paramarg2: string, paramarg3: string): ValidIdentifiers$Datasubtype;
    constructor()
}
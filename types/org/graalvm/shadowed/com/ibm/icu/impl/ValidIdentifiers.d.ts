import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ValidIdentifiers$Datasubtype } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ValidIdentifiers$Datasubtype.d.ts'
import type { ValidIdentifiers$Datatype } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ValidIdentifiers$Datatype.d.ts'
export class ValidIdentifiers extends Object {
    static getData(): { [key in ValidIdentifiers$Datatype]: Object | null };
    static isValid(paramdatatype: ValidIdentifiers$Datatype, paramdatasubtypes: ValidIdentifiers$Datasubtype[], paramcode: string): ValidIdentifiers$Datasubtype;
    static isValid(paramdatatype: ValidIdentifiers$Datatype, paramdatasubtypes: ValidIdentifiers$Datasubtype[], paramcode: string, paramvalue: string): ValidIdentifiers$Datasubtype;
    constructor()
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ValidIdentifiers$Datatype } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ValidIdentifiers$Datatype.d.ts'
export class LocaleValidityChecker$Where extends Object {
    constructor()
    codeFailure: string;
    fieldFailure: ValidIdentifiers$Datatype;
    set(datatype: ValidIdentifiers$Datatype, code: string): boolean;
    toString(): string;
}
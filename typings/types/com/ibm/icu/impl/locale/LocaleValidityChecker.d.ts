import type { ValidIdentifiers$Datasubtype } from '../../../../../com/ibm/icu/impl/ValidIdentifiers$Datasubtype.d.ts'
import type { ValidIdentifiers$Datatype } from '../../../../../com/ibm/icu/impl/ValidIdentifiers$Datatype.d.ts'
import type { LocaleValidityChecker$Where } from '../../../../../com/ibm/icu/impl/locale/LocaleValidityChecker$Where.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocaleValidityChecker extends Object {
    constructor(arg0: ValidIdentifiers$Datasubtype[])
    constructor(arg0: ValidIdentifiers$Datasubtype[])
    // private allowsDeprecated: boolean;
    readonly datasubtypes: ValidIdentifiers$Datasubtype[];
    getDatasubtypes(): ValidIdentifiers$Datasubtype[];
    // private isScriptReorder(arg0: string): boolean;
    // private isSubdivision(arg0: ULocale, arg1: string): boolean;
    // private isValid(arg0: ValidIdentifiers$Datatype, arg1: string, arg2: LocaleValidityChecker$Where): boolean;
    isValid(arg0: ULocale, arg1: LocaleValidityChecker$Where): boolean;
    // private isValidLocale(arg0: string, arg1: LocaleValidityChecker$Where): boolean;
    // private isValidU(arg0: ULocale, arg1: ValidIdentifiers$Datatype, arg2: string, arg3: LocaleValidityChecker$Where): boolean;
}
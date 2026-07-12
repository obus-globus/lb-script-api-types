import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ValidIdentifiers$Datasubtype } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ValidIdentifiers$Datasubtype.d.ts'
import type { ValidIdentifiers$Datatype } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ValidIdentifiers$Datatype.d.ts'
import type { LocaleValidityChecker$Where } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleValidityChecker$Where.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleValidityChecker extends Object {
    constructor(...datasubtypes: ValidIdentifiers$Datasubtype[])
    constructor(datasubtypes: ValidIdentifiers$Datasubtype[])
    // private allowsDeprecated: boolean;
    readonly datasubtypes: ValidIdentifiers$Datasubtype[];
    getDatasubtypes(): ValidIdentifiers$Datasubtype[];
    // private isScriptReorder(subtag: string): boolean;
    // private isSubdivision(locale: ULocale, subtag: string): boolean;
    // private isValid(datatype: ValidIdentifiers$Datatype, code: string, where: LocaleValidityChecker$Where): boolean;
    isValid(locale: ULocale, where: LocaleValidityChecker$Where): boolean;
    // private isValidLocale(extensionString: string, where: LocaleValidityChecker$Where): boolean;
    // private isValidU(locale: ULocale, datatype: ValidIdentifiers$Datatype, extensionString: string, where: LocaleValidityChecker$Where): boolean;
}
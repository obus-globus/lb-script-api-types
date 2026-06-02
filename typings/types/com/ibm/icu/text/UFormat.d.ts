import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { Format } from '../../../../java/text/Format.d.ts'
export abstract class UFormat extends Format {
    constructor()
    // private actualLocale: ULocale;
    // private validLocale: ULocale;
    getLocale(arg0: ULocale$Type): ULocale;
    setLocale(arg0: ULocale, arg1: ULocale): void;
}
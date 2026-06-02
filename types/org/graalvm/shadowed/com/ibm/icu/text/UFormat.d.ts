import type { Format } from '../../../../../../../java/text/Format.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
export abstract class UFormat extends Format {
    constructor()
    // private actualLocale: ULocale;
    // private validLocale: ULocale;
    getLocale(type: ULocale$Type): ULocale;
    setLocale(valid: ULocale, actual: ULocale): void;
}
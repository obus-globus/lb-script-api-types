import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUResourceBundle$AvailEntry extends Object {
    constructor(arg0: string, arg1: ClassLoader)
    // private fullNameSet: string[];
    // private loader: ClassLoader;
    // private locales: Locale[];
    // private nameSet: string[];
    // private prefix: string;
    // private ulocales: JavaMap<ULocale$AvailableType, ULocale[]>;
    getFullLocaleNameSet(): string[];
    getLocaleList(arg0: ULocale$AvailableType): Locale[];
    getLocaleNameSet(): string[];
    getULocaleList(arg0: ULocale$AvailableType): ULocale[];
}
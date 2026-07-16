import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$AvailableType.d.ts'
export class ICUResourceBundle$AvailEntry extends Object {
    constructor(prefix: string, loader: ClassLoader)
    // private fullNameSet: string[];
    // private loader: ClassLoader;
    // private locales: Locale[];
    // private nameSet: string[];
    // private prefix: string;
    // private ulocales: Map<ULocale$AvailableType, ULocale[]>;
    getFullLocaleNameSet(): string[];
    getLocaleList(type: ULocale$AvailableType): Locale[];
    getLocaleNameSet(): string[];
    getULocaleList(type: ULocale$AvailableType): ULocale[];
}
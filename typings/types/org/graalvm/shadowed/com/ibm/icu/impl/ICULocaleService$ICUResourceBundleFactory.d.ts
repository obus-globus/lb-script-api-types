import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICULocaleService$LocaleKeyFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICULocaleService$ICUResourceBundleFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor()
    constructor(bundleName: string)
    // private bundleName: string;
    getSupportedIDs(): string[];
    handleCreate(loc: ULocale, kind: number, service: ICUService): Object;
    loader(): ClassLoader;
    toString(): string;
    updateVisibleIDs(result: { [key: string]: ICUService$Factory }): void;
}
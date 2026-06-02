import type { ICULocaleService$LocaleKeyFactory } from '../../../../com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICULocaleService$ICUResourceBundleFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor()
    constructor(arg0: string)
    // private bundleName: string;
    getSupportedIDs(): string[];
    handleCreate(arg0: ULocale, arg1: number, arg2: ICUService): Object;
    loader(): ClassLoader;
    toString(): string;
    updateVisibleIDs(arg0: { [key: string]: ICUService$Factory }): void;
}
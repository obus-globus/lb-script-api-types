import type { ICULocaleService$LocaleKeyFactory } from '../../../../com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFormatServiceShim$NFFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(arg0: NumberFormat$NumberFormatFactory)
    // private delegate: NumberFormat$NumberFormatFactory;
    create(arg0: ICUService$Key, arg1: ICUService): Object;
    getSupportedIDs(): string[];
}
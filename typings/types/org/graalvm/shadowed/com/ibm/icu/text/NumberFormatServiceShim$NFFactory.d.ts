import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICULocaleService$LocaleKeyFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { NumberFormat$NumberFormatFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$NumberFormatFactory.d.ts'
export class NumberFormatServiceShim$NFFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(delegate: NumberFormat$NumberFormatFactory)
    // private delegate: NumberFormat$NumberFormatFactory;
    create(key: ICUService$Key, srvc: ICUService): Object;
    getSupportedIDs(): string[];
}
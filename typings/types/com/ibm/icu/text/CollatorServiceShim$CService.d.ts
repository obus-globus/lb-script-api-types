import type { ICULocaleService } from '../../../../com/ibm/icu/impl/ICULocaleService.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollatorServiceShim$CService extends ICULocaleService {
    constructor()
    handleDefault(arg0: ICUService$Key, arg1: string[]): Object;
    validateFallbackLocale(): string;
}
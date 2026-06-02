import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICULocaleService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICULocaleService.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
export class CollatorServiceShim$CService extends ICULocaleService {
    constructor()
    handleDefault(key: ICUService$Key, actualIDReturn: string[]): Object;
    validateFallbackLocale(): string;
}
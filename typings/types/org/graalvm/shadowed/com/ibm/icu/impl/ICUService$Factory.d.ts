import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export interface ICUService$Factory extends Object{
    create(key: ICUService$Key, service: ICUService): Object;
    getDisplayName(id: string, locale: ULocale): string;
    updateVisibleIDs(result: JavaMap<string, ICUService$Factory>): void;
}
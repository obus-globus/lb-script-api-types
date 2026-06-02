import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ICUService$Factory extends Object{
    create(arg0: ICUService$Key, arg1: ICUService): Object;
    getDisplayName(arg0: string, arg1: ULocale): string;
    updateVisibleIDs(arg0: { [key: string]: ICUService$Factory }): void;
}
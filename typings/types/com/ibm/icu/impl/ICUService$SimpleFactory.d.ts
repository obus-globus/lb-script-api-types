import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUService$SimpleFactory extends Object implements ICUService$Factory {
    constructor(arg0: Object, arg1: string)
    constructor(arg0: Object, arg1: string, arg2: boolean)
    // private id: string;
    // private instance: Object;
    // private visible: boolean;
    create(arg0: ICUService$Key, arg1: ICUService): Object;
    getDisplayName(arg0: string, arg1: ULocale): string;
    toString(): string;
    updateVisibleIDs(arg0: JavaMap<string, ICUService$Factory>): void;
}
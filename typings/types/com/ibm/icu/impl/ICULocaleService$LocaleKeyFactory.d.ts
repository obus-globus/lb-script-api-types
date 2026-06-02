import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ICULocaleService$LocaleKeyFactory extends Object implements ICUService$Factory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: string)
    // private name: string;
    // private visible: boolean;
    create(arg0: ICUService$Key, arg1: ICUService): Object;
    getDisplayName(arg0: string, arg1: ULocale): string;
    getSupportedIDs(): string[];
    handleCreate(arg0: ULocale, arg1: number, arg2: ICUService): Object;
    handlesKey(arg0: ICUService$Key): boolean;
    isSupportedID(arg0: string): boolean;
    toString(): string;
    updateVisibleIDs(arg0: { [key: string]: ICUService$Factory }): void;
}
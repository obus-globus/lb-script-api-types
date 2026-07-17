import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class ICULocaleService$LocaleKeyFactory extends Object implements ICUService$Factory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(visible: boolean)
    constructor(visible: boolean, name: string)
    // private name: string;
    // private visible: boolean;
    create(key: ICUService$Key, service: ICUService): Object;
    getDisplayName(id: string, locale: ULocale): string;
    getSupportedIDs(): string[];
    handleCreate(loc: ULocale, kind: number, service: ICUService): Object;
    handlesKey(key: ICUService$Key): boolean;
    isSupportedID(id: string): boolean;
    toString(): string;
    updateVisibleIDs(result: JavaMap<string, ICUService$Factory>): void;
}
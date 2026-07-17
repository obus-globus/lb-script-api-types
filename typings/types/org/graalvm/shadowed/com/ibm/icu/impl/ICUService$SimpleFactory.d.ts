import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUService$SimpleFactory extends Object implements ICUService$Factory {
    constructor(instance: Object, id: string)
    constructor(instance: Object, id: string, visible: boolean)
    // private id: string;
    // private instance: Object;
    // private visible: boolean;
    create(key: ICUService$Key, service: ICUService): Object;
    getDisplayName(identifier: string, locale: ULocale): string;
    toString(): string;
    updateVisibleIDs(result: JavaMap<string, ICUService$Factory>): void;
}
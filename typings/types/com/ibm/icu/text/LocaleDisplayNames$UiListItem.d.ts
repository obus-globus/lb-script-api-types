import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleDisplayNames$UiListItem extends Object {
    static getComparator(paramarg0: (param0: Object) => boolean, paramarg1: boolean): (param0: Object) => boolean;
    constructor(arg0: ULocale, arg1: ULocale, arg2: string, arg3: string)
    minimized: ULocale;
    modified: ULocale;
    nameInDisplayLocale: string;
    nameInSelf: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
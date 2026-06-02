import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNames$UiListItem extends Object {
    static getComparator(paramcomparator: (param0: Object) => kotlin.Boolean, paraminSelf: boolean): (param0: LocaleDisplayNames$UiListItem) => kotlin.Boolean;
    constructor(minimized: ULocale, modified: ULocale, nameInDisplayLocale: string, nameInSelf: string)
    minimized: ULocale;
    modified: ULocale;
    nameInDisplayLocale: string;
    nameInSelf: string;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListFormatter$FormattedList } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$FormattedList.d.ts'
import type { ListFormatter$FormattedListBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$FormattedListBuilder.d.ts'
import type { ListFormatter$PatternHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$PatternHandler.d.ts'
import type { ListFormatter$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$Type.d.ts'
import type { ListFormatter$Width } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$Width.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ListFormatter extends Object {
    static getInstance(): ListFormatter;
    static getInstance(paramlocale: Locale): ListFormatter;
    static getInstance(paramlocale: Locale, paramtype: ListFormatter$Type, paramwidth: ListFormatter$Width): ListFormatter;
    static getInstance(paramlocale: ULocale): ListFormatter;
    static getInstance(paramlocale: ULocale, paramtype: ListFormatter$Type, paramwidth: ListFormatter$Width): ListFormatter;
    constructor(two: string, start: string, middle: string, end: string)
    private constructor(two: string, start: string, middle: string, end: string, locale: ULocale)
    readonly locale: ULocale;
    // private middle: string;
    // private patternHandler: ListFormatter$PatternHandler;
    // private start: string;
    // private createPatternHandler(two: string, end: string): ListFormatter$PatternHandler;
    format(items: Object[]): string;
    format(items: (Object | null)[]): string;
    formatImpl(items: (Object | null)[], needsFields: boolean): ListFormatter$FormattedListBuilder;
    formatToValue(items: Object[]): ListFormatter$FormattedList;
    formatToValue(items: (Object | null)[]): ListFormatter$FormattedList;
    getLocale(): ULocale;
    getPatternForNumItems(count: number): string;
}
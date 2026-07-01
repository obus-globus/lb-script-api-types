import type { ListFormatter$FormattedList } from '../../../../com/ibm/icu/text/ListFormatter$FormattedList.d.ts'
import type { ListFormatter$FormattedListBuilder } from '../../../../com/ibm/icu/text/ListFormatter$FormattedListBuilder.d.ts'
import type { ListFormatter$PatternHandler } from '../../../../com/ibm/icu/text/ListFormatter$PatternHandler.d.ts'
import type { ListFormatter$Type } from '../../../../com/ibm/icu/text/ListFormatter$Type.d.ts'
import type { ListFormatter$Width } from '../../../../com/ibm/icu/text/ListFormatter$Width.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListFormatter extends Object {
    static getInstance(): ListFormatter;
    static getInstance(paramarg0: ULocale): ListFormatter;
    static getInstance(paramarg0: ULocale, paramarg1: ListFormatter$Type, paramarg2: ListFormatter$Width): ListFormatter;
    static getInstance(paramarg0: Locale): ListFormatter;
    static getInstance(paramarg0: Locale, paramarg1: ListFormatter$Type, paramarg2: ListFormatter$Width): ListFormatter;
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    readonly locale: ULocale;
    // private middle: string;
    // private patternHandler: ListFormatter$PatternHandler;
    // private start: string;
    // private createPatternHandler(arg0: string, arg1: string): ListFormatter$PatternHandler;
    format(arg0: Object[]): string;
    format(arg0: (Object | null)[]): string;
    formatImpl(arg0: (Object | null)[], arg1: boolean): ListFormatter$FormattedListBuilder;
    formatToValue(arg0: Object[]): ListFormatter$FormattedList;
    formatToValue(arg0: (Object | null)[]): ListFormatter$FormattedList;
    getLocale(): ULocale;
    getPatternForNumItems(arg0: number): string;
}
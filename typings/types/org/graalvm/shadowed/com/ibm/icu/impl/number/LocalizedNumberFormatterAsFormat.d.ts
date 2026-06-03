import type { StringBuffer } from '../../../../../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocalizedNumberFormatterAsFormat extends Format {
    constructor(formatter: LocalizedNumberFormatter, locale: ULocale)
    // private formatter: LocalizedNumberFormatter;
    // private locale: ULocale;
    equals(other: Object | null): boolean;
    format(arg0: Object): string;
    format(obj: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    formatToCharacterIterator(obj: Object): AttributedCharacterIterator;
    getNumberFormatter(): LocalizedNumberFormatter;
    hashCode(): number;
    parseObject(arg0: string): Object;
    parseObject(source: string, pos: ParsePosition): Object;
    // private writeReplace(): Object;
}
import type { LocalizedNumberFormatter } from '../../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LocalizedNumberFormatterAsFormat extends Format {
    constructor(arg0: LocalizedNumberFormatter, arg1: ULocale)
    // private formatter: LocalizedNumberFormatter;
    // private locale: ULocale;
    equals(arg0: Object | null): boolean;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    getNumberFormatter(): LocalizedNumberFormatter;
    hashCode(): number;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private writeReplace(): Object;
}
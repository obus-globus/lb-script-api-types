import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class DurationFormat extends UFormat {
    static getInstance(paramlocale: ULocale): DurationFormat;
    constructor()
    constructor(locale: ULocale)
    format(object: Object, toAppend: StringBuffer, pos: FieldPosition): StringBuffer;
    formatDurationFrom(duration: number, referenceDate: number): string;
    formatDurationFromNow(duration: number): string;
    formatDurationFromNowTo(targetDate: Date): string;
    parseObject(source: string, pos: ParsePosition): Object;
}
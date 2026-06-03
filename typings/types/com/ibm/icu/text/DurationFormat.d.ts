import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class DurationFormat extends UFormat {
    static getInstance(paramarg0: ULocale): DurationFormat;
    constructor()
    constructor(arg0: ULocale)
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    formatDurationFrom(arg0: number, arg1: number): string;
    formatDurationFromNow(arg0: number): string;
    formatDurationFromNowTo(arg0: Date): string;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
}
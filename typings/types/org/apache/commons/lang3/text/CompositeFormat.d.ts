import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompositeFormat extends Format {
    constructor(arg0: Format, arg1: Format)
    readonly formatter: Format;
    readonly parser: Format;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    getFormatter(): Format;
    getParser(): Format;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    reformat(arg0: string): string;
}
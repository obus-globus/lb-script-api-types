import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Format } from '../../../../../java/text/Format.d.ts'
import type { MessageFormat } from '../../../../../java/text/MessageFormat.d.ts'
import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormatFactory } from '../../../../../org/apache/commons/lang3/text/FormatFactory.d.ts'
export class ExtendedMessageFormat extends MessageFormat {
    static format(paramarg0: string, paramarg1: (Object | null)[]): string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: { [key: string]: FormatFactory })
    constructor(arg0: string, arg1: Locale)
    constructor(arg0: string, arg1: Locale, arg2: { [key: string]: FormatFactory })
    // private registry: { [key: string]: FormatFactory };
    // private toPattern: string;
    // private appendQuotedString(arg0: string, arg1: ParsePosition, arg2: StringBuilder): StringBuilder;
    applyPattern(arg0: string): void;
    // private containsElements(arg0: E[]): boolean;
    equals(arg0: Object | null): boolean;
    // private getFormat(arg0: string): Format;
    // private getQuotedString(arg0: string, arg1: ParsePosition): void;
    hashCode(): number;
    // private insertFormats(arg0: string, arg1: string[]): string;
    // private next(arg0: ParsePosition): ParsePosition;
    // private parseFormatDescription(arg0: string, arg1: ParsePosition): string;
    // private readArgumentIndex(arg0: string, arg1: ParsePosition): number;
    // private seekNonWs(arg0: string, arg1: ParsePosition): void;
    setFormat(arg0: number, arg1: Format): void;
    setFormatByArgumentIndex(arg0: number, arg1: Format): void;
    setFormats(arg0: Format[]): void;
    setFormatsByArgumentIndex(arg0: Format[]): void;
    toPattern(): string;
}
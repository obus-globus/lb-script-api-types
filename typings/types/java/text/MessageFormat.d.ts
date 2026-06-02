import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format } from '../../java/text/Format.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { MessageFormat$FormatType } from '../../java/text/MessageFormat$FormatType.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MessageFormat extends Format {
    static format(paramarg0: string, paramarg1: (Object | null)[]): string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Locale)
    // private argumentNumbers: number[];
    readonly formats: Format[];
    readonly locale: Locale;
    // private maxOffset: number;
    // private offsets: number[];
    // private pattern: string;
    // private append(arg0: Format$StringBuf, arg1: CharacterIterator): void;
    applyPattern(arg0: string): void;
    // private applyPatternImpl(arg0: string): void;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    format(arg0: Object[], arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    // private formatFromPattern(arg0: string, arg1: string): Format;
    // private formatFromSubformatPattern(arg0: MessageFormat$FormatType, arg1: string): Format;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    getFormats(): Format[];
    getFormatsByArgumentIndex(): Format[];
    getLocale(): Locale;
    hashCode(): number;
    parse(arg0: string): Object[];
    parse(arg0: string, arg1: ParsePosition): Object[];
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private patternFromFormat(arg0: Format): string;
    // private readObject(arg0: ObjectInputStream): void;
    // private readObjectNoData(): void;
    setFormat(arg0: number, arg1: Format): void;
    setFormatByArgumentIndex(arg0: number, arg1: Format): void;
    // private setFormatFromPattern(arg0: number, arg1: number, arg2: StringBuilder[]): void;
    setFormats(arg0: Format[]): void;
    setFormatsByArgumentIndex(arg0: Format[]): void;
    setLocale(arg0: Locale): void;
    // private subformat(arg0: Object[], arg1: Format$StringBuf, arg2: FieldPosition, arg3: AttributedCharacterIterator[]): Format$StringBuf;
    toPattern(): string;
    toString(): string;
}
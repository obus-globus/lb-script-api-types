import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class MessageFormat$FormatType extends Enum<MessageFormat$FormatType> {
    static BASIC_ISO_DATE: MessageFormat$FormatType;
    static CHOICE: MessageFormat$FormatType;
    static DATE: MessageFormat$FormatType;
    static DTF_DATE: MessageFormat$FormatType;
    static DTF_DATETIME: MessageFormat$FormatType;
    static DTF_TIME: MessageFormat$FormatType;
    static ISO_DATE: MessageFormat$FormatType;
    static ISO_DATE_TIME: MessageFormat$FormatType;
    static ISO_INSTANT: MessageFormat$FormatType;
    static ISO_LOCAL_DATE: MessageFormat$FormatType;
    static ISO_LOCAL_DATE_TIME: MessageFormat$FormatType;
    static ISO_LOCAL_TIME: MessageFormat$FormatType;
    static ISO_OFFSET_DATE: MessageFormat$FormatType;
    static ISO_OFFSET_DATE_TIME: MessageFormat$FormatType;
    static ISO_OFFSET_TIME: MessageFormat$FormatType;
    static ISO_ORDINAL_DATE: MessageFormat$FormatType;
    static ISO_TIME: MessageFormat$FormatType;
    static ISO_WEEK_DATE: MessageFormat$FormatType;
    static ISO_ZONED_DATE_TIME: MessageFormat$FormatType;
    static LIST: MessageFormat$FormatType;
    static NUMBER: MessageFormat$FormatType;
    static RFC_1123_DATE_TIME: MessageFormat$FormatType;
    static TIME: MessageFormat$FormatType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MessageFormat$FormatType;
    static values(): MessageFormat$FormatType[];
    private constructor()
    name(): "NUMBER" | "DATE" | "TIME" | "DTF_DATE" | "DTF_TIME" | "DTF_DATETIME" | "CHOICE" | "LIST" | "BASIC_ISO_DATE" | "ISO_LOCAL_DATE" | "ISO_OFFSET_DATE" | "ISO_DATE" | "ISO_LOCAL_TIME" | "ISO_OFFSET_TIME" | "ISO_TIME" | "ISO_LOCAL_DATE_TIME" | "ISO_OFFSET_DATE_TIME" | "ISO_ZONED_DATE_TIME" | "ISO_DATE_TIME" | "ISO_ORDINAL_DATE" | "ISO_WEEK_DATE" | "ISO_INSTANT" | "RFC_1123_DATE_TIME";
}
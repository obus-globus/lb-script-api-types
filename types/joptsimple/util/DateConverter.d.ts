import type { Class } from '../../java/lang/Class.d.ts'
import type { DateFormat } from '../../java/text/DateFormat.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DateConverter extends Object implements ValueConverter<Date> {
    static datePattern(paramarg0: string): DateConverter;
    constructor(arg0: DateFormat)
    // private formatter: DateFormat;
    convert(arg0: string): Date;
    // private message(arg0: string): string;
    valuePattern(): string;
    valueType(): Class<Date>;
}
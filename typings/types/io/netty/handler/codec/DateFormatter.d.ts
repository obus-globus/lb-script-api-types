import type { DateFormatter$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { GregorianCalendar } from '../../../../java/util/GregorianCalendar.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class DateFormatter extends Object {
    static append(paramarg0: Date, paramarg1: StringBuilder): StringBuilder;
    static format(paramarg0: Date): string;
    static parseHttpDate(paramarg0: CharSequence): Date;
    static parseHttpDate(paramarg0: CharSequence, paramarg1: number, paramarg2: number): Date;
    private constructor()
    constructor(arg0: DateFormatter$1)
    // private cal: GregorianCalendar;
    // private dayOfMonth: number;
    // private dayOfMonthFound: boolean;
    // private hours: number;
    // private minutes: number;
    // private month: number;
    // private monthFound: boolean;
    // private sb: StringBuilder;
    // private seconds: number;
    // private timeFound: boolean;
    // private year: number;
    // private yearFound: boolean;
    // private append0(arg0: Date, arg1: StringBuilder): StringBuilder;
    // private computeDate(): Date;
    // private format0(arg0: Date): string;
    // private normalizeAndValidate(): boolean;
    // private parse0(arg0: CharSequence, arg1: number, arg2: number): Date;
    // private parse1(arg0: CharSequence, arg1: number, arg2: number): boolean;
    // private parseToken(arg0: CharSequence, arg1: number, arg2: number): boolean;
    reset(): void;
    // private tryParseDayOfMonth(arg0: CharSequence, arg1: number, arg2: number): boolean;
    // private tryParseMonth(arg0: CharSequence, arg1: number, arg2: number): boolean;
    // private tryParseTime(arg0: CharSequence, arg1: number, arg2: number): boolean;
    // private tryParseYear(arg0: CharSequence, arg1: number, arg2: number): boolean;
}
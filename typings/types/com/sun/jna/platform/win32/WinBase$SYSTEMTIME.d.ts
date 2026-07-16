import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
export class WinBase$SYSTEMTIME extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Calendar)
    constructor(arg0: Date)
    constructor(arg0: number)
    wDay: number;
    wDayOfWeek: number;
    wHour: number;
    wMilliseconds: number;
    wMinute: number;
    wMonth: number;
    wSecond: number;
    wYear: number;
    fromCalendar(arg0: Calendar): void;
    toCalendar(): Calendar;
    toString(): string;
    toString(arg0: boolean): string;
}
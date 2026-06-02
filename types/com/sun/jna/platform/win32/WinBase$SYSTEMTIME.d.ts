import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinBase$SYSTEMTIME extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
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
}
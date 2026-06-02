import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DurationFormatUtils extends Object {
    static ISO_EXTENDED_FORMAT_PATTERN: string;
    static formatDuration(paramarg0: number, paramarg1: string): string;
    static formatDuration(paramarg0: number, paramarg1: string, paramarg2: boolean): string;
    static formatDurationHMS(paramarg0: number): string;
    static formatDurationISO(paramarg0: number): string;
    static formatDurationWords(paramarg0: number, paramarg1: boolean, paramarg2: boolean): string;
    static formatPeriod(paramarg0: number, paramarg1: number, paramarg2: string): string;
    static formatPeriod(paramarg0: number, paramarg1: number, paramarg2: string, paramarg3: boolean, paramarg4: TimeZone): string;
    static formatPeriodISO(paramarg0: number, paramarg1: number): string;
    constructor()
}
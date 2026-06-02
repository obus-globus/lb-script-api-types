import type { Locale } from '../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CalendarDate } from '../../../sun/util/calendar/CalendarDate.d.ts'
export class Era extends Object {
    constructor(arg0: string, arg1: string, arg2: number, arg3: boolean)
    // private abbr: string;
    // private hash: number;
    readonly localTime: boolean;
    readonly name: string;
    // private since: number;
    readonly sinceDate: CalendarDate;
    equals(arg0: Object | null): boolean;
    getAbbreviation(): string;
    getDisplayName(arg0: Locale): string;
    getName(): string;
    getSince(arg0: TimeZone): number;
    getSinceDate(): CalendarDate;
    hashCode(): number;
    isLocalTime(): boolean;
    toString(): string;
}
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TimeZones extends Object {
    static GMT: TimeZone;
    static GMT_ID: string;
    static getTimeZone(paramarg0: string): TimeZone;
    static toTimeZone(paramarg0: TimeZone): TimeZone;
    private constructor()
}
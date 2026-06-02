import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FastTimeZone extends Object {
    static getGmtTimeZone(): TimeZone;
    static getGmtTimeZone(paramarg0: string): TimeZone;
    static getTimeZone(paramarg0: string): TimeZone;
    private constructor()
}
import type { DateParser$Name } from '../../../../../../com/oracle/truffle/js/parser/date/DateParser$Name.d.ts'
import type { DateParser$Token } from '../../../../../../com/oracle/truffle/js/parser/date/DateParser$Token.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DateParser extends Object {
    static DAY: number;
    static HOUR: number;
    static MILLISECOND: number;
    static MINUTE: number;
    static MONTH: number;
    static SECOND: number;
    static TIMEZONE: number;
    static YEAR: number;
    constructor(realm: JSRealm, string: string, extraLenient: boolean)
    // private currentField: number;
    // private extraLenient: boolean;
    // private fields: number[];
    // private length: number;
    // private nameValue: DateParser$Name;
    // private namedMonth: boolean;
    // private numValue: number;
    // private pos: number;
    // private realm: JSRealm;
    // private string: string;
    // private token: DateParser$Token;
    // private tokenLength: number;
    // private yearSign: number;
    // private checkEcmaField(field: number, value: number): boolean;
    // private checkLegacyField(field: number, value: number): boolean;
    // private checkMilliseconds(value: number): boolean;
    // private endOfTime(): boolean;
    // private get(field: number): number;
    getDateFields(): number[];
    // private isSet(field: number): boolean;
    // private isUTCDefaultTimezone(dateOnly: boolean, strict: boolean): boolean;
    // private next(): DateParser$Token;
    parse(): boolean;
    parseEcmaDate(): boolean;
    parseLegacyDate(): boolean;
    // private patchResult(strict: boolean): boolean;
    // private peek(): number;
    // private readName(): DateParser$Name;
    // private readNumber(maxDigits: number): number;
    // private readTimeZoneOffset(): number;
    // private set(field: number, value: number): void;
    // private setAmPm(offset: number): boolean;
    // private setDateField(n: number): boolean;
    // private setMonth(m: number): boolean;
    // private setTimeField(n: number): boolean;
    // private setTimezone(offset: number, asNumericOffset: boolean): boolean;
    // private skipDelimiter(c: string): boolean;
    // private skipEcmaDelimiter(): boolean;
    // private skipNumberDelimiter(c: string): boolean;
    // private skipParentheses(): boolean;
}
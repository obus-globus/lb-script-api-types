import type { CookieDateBuilder } from '../../../io/ktor/http/CookieDateBuilder.d.ts'
import type { Month } from '../../../io/ktor/util/date/Month.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CookieUtilsKt extends Object {
    static handleToken(self: CookieDateBuilder, token: string): void;
    static isDelimiter(self: string): boolean;
    static isDigit(self: string): boolean;
    static isNonDelimiter(self: string): boolean;
    static isNonDigit(self: string): boolean;
    static isOctet(self: string): boolean;
    static otherwise(self: boolean, block: () => void): void;
    static tryParseDayOfMonth(self: string, success: (param0: number) => void): void;
    static tryParseMonth(self: string, success: (param0: Month) => void): void;
    static tryParseTime(self: string, success: (param0: number, param1: number, param2: number) => void): void;
    static tryParseYear(self: string, success: (param0: number) => void): void;
}
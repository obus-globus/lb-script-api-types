import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CookieEncoding extends Enum<CookieEncoding> {
    static BASE64_ENCODING: CookieEncoding;
    static DQUOTES: CookieEncoding;
    static RAW: CookieEncoding;
    static URI_ENCODING: CookieEncoding;
    static getEntries(): CookieEncoding[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CookieEncoding;
    static values(): CookieEncoding[];
    private constructor()
    name(): "RAW" | "DQUOTES" | "URI_ENCODING" | "BASE64_ENCODING";
}
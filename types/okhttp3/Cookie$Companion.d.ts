import type { Pattern } from '../java/util/regex/Pattern.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Cookie } from '../okhttp3/Cookie.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
export class Cookie$Companion extends Object {
    // private DAY_OF_MONTH_PATTERN: Pattern;
    // private MONTH_PATTERN: Pattern;
    // private TIME_PATTERN: Pattern;
    // private YEAR_PATTERN: Pattern;
    // private dateCharacterOffset(input: string, pos: number, limit: number, invert: boolean): number;
    // private domainMatch(urlHost: string, domain: string): boolean;
    parse(currentTimeMillis: number, url: HttpUrl, setCookie: string): Cookie | null;
    parse(url: HttpUrl, setCookie: string): Cookie | null;
    parseAll(url: HttpUrl, headers: Pair<string, string>[]): Cookie[];
    // private parseDomain(s: string): string;
    // private parseExpires(s: string, pos: number, limit: number): number;
    // private parseMaxAge(s: string): number;
    // private pathMatch(url: HttpUrl, path: string): boolean;
}
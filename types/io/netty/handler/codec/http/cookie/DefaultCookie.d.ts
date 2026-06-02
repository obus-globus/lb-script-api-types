import type { Cookie } from '../../../../../../io/netty/handler/codec/http/cookie/Cookie.d.ts'
import type { CookieHeaderNames$SameSite } from '../../../../../../io/netty/handler/codec/http/cookie/CookieHeaderNames$SameSite.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultCookie extends Object implements Cookie {
    static UNDEFINED_MAX_AGE: number;
    constructor(arg0: string, arg1: string)
    readonly domain: string;
    readonly httpOnly: boolean;
    readonly maxAge: number;
    // private name: string;
    readonly partitioned: boolean;
    readonly path: string;
    readonly sameSite: CookieHeaderNames$SameSite;
    readonly secure: boolean;
    readonly value: string;
    readonly wrap: boolean;
    compareTo(arg0: Cookie): number;
    domain(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isHttpOnly(): boolean;
    isPartitioned(): boolean;
    isSecure(): boolean;
    maxAge(): number;
    name(): string;
    path(): string;
    sameSite(): CookieHeaderNames$SameSite;
    setDomain(arg0: string): void;
    setHttpOnly(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setPartitioned(arg0: boolean): void;
    setPath(arg0: string): void;
    setSameSite(arg0: CookieHeaderNames$SameSite): void;
    setSecure(arg0: boolean): void;
    setValue(arg0: string): void;
    setWrap(arg0: boolean): void;
    toString(): string;
    validateValue(arg0: string, arg1: string): string;
    value(): string;
    wrap(): boolean;
}
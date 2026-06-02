import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class HttpCookie extends Object implements Cloneable {
    static domainMatches(paramarg0: string, paramarg1: string): boolean;
    static parse(paramarg0: string): HttpCookie[];
    constructor(arg0: string, arg1: string)
    private constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    readonly comment: string;
    readonly commentURL: string;
    readonly domain: string;
    // private header: string;
    readonly httpOnly: boolean;
    readonly maxAge: number;
    readonly name: string;
    readonly path: string;
    readonly portlist: string;
    readonly secure: boolean;
    // private toDiscard: boolean;
    readonly value: string;
    readonly version: number;
    // private whenCreated: number;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    // private expiryDate2DeltaSeconds(arg0: string): number;
    getComment(): string;
    getCommentURL(): string;
    getCreationTime(): number;
    getDiscard(): boolean;
    getDomain(): string;
    getMaxAge(): number;
    getName(): string;
    getPath(): string;
    getPortlist(): string;
    getSecure(): boolean;
    getValue(): string;
    getVersion(): number;
    hasExpired(): boolean;
    hashCode(): number;
    // private header(): string;
    isHttpOnly(): boolean;
    setComment(arg0: string): void;
    setCommentURL(arg0: string): void;
    setDiscard(arg0: boolean): void;
    setDomain(arg0: string): void;
    setHttpOnly(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setPath(arg0: string): void;
    setPortlist(arg0: string): void;
    setSecure(arg0: boolean): void;
    setValue(arg0: string): void;
    setVersion(arg0: number): void;
    // private toNetscapeHeaderString(): string;
    // private toRFC2965HeaderString(): string;
    toString(): string;
}
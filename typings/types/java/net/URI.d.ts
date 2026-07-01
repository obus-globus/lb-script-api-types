import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class URI extends Object implements Serializable, Comparable<URI> {
    static create(paramarg0: string): URI;
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
    readonly authority: string;
    // private decodedAuthority: string;
    // private decodedFragment: string;
    // private decodedPath: string;
    // private decodedQuery: string;
    // private decodedSchemeSpecificPart: string;
    // private decodedUserInfo: string;
    readonly fragment: string;
    // private hash: number;
    readonly host: string;
    readonly path: string;
    readonly port: number;
    readonly query: string;
    readonly scheme: string;
    readonly schemeSpecificPart: string;
    // private string: string;
    readonly userInfo: string;
    // private appendAuthority(arg0: StringBuilder, arg1: string, arg2: string, arg3: string, arg4: number): void;
    // private appendFragment(arg0: StringBuilder, arg1: string): void;
    // private appendSchemeSpecificPart(arg0: StringBuilder, arg1: string, arg2: string, arg3: string, arg4: string, arg5: number, arg6: string, arg7: string): void;
    compareTo(arg0: URI): number;
    // private defineString(): string;
    equals(arg0: Object | null): boolean;
    getAuthority(): string;
    getFragment(): string;
    getHost(): string;
    getPath(): string;
    getPort(): number;
    getQuery(): string;
    getRawAuthority(): string;
    getRawFragment(): string;
    getRawPath(): string;
    getRawQuery(): string;
    getRawSchemeSpecificPart(): string;
    getRawUserInfo(): string;
    getScheme(): string;
    getSchemeSpecificPart(): string;
    getUserInfo(): string;
    hashCode(): number;
    isAbsolute(): boolean;
    isOpaque(): boolean;
    normalize(): URI;
    parseServerAuthority(): URI;
    // private readObject(arg0: ObjectInputStream): void;
    relativize(arg0: URI): URI;
    resolve(arg0: URI): URI;
    resolve(arg0: string): URI;
    toASCIIString(): string;
    toString(): string;
    // private toString(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: number, arg6: string, arg7: string, arg8: string): string;
    toURL(): URL;
    // private writeObject(arg0: ObjectOutputStream): void;
}
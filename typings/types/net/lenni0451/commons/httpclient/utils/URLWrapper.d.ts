import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { URLWrapper$QueryParametersWrapper } from '../../../../../net/lenni0451/commons/httpclient/utils/URLWrapper$QueryParametersWrapper.d.ts'
import type { URLWrapper$QueryWrapper } from '../../../../../net/lenni0451/commons/httpclient/utils/URLWrapper$QueryWrapper.d.ts'
export class URLWrapper extends Object {
    static empty(): URLWrapper;
    static of(paramarg0: string): URLWrapper;
    static of(paramarg0: URI): URLWrapper;
    static of(paramarg0: URL): URLWrapper;
    static ofURI(paramarg0: string): URLWrapper;
    static ofURL(paramarg0: string): URLWrapper;
    constructor()
    constructor(arg0: URI)
    constructor(arg0: URL)
    constructor(arg0: string)
    readonly fragment: string;
    readonly host: string;
    readonly path: string;
    readonly port: number;
    readonly protocol: string;
    readonly query: string;
    readonly userInfo: string;
    // private emptyToNull(arg0: string): string;
    getFragment(): string;
    getFragmentOr(arg0: string): string;
    getHost(): string;
    getHostOr(arg0: string): string;
    getPath(): string;
    getPathOr(arg0: string): string;
    getPort(): number;
    getPortOr(arg0: number): number;
    getProtocol(): string;
    getProtocolOr(arg0: string): string;
    getQuery(): string;
    getQueryOr(arg0: string): string;
    getReference(): string;
    getUserInfo(): string;
    getUserInfoOr(arg0: string): string;
    hasFragment(): boolean;
    hasHost(): boolean;
    hasPath(): boolean;
    hasPort(): boolean;
    hasProtocol(): boolean;
    hasQuery(): boolean;
    hasUserInfo(): boolean;
    setFragment(arg0: string): URLWrapper;
    setHost(arg0: string): URLWrapper;
    setPath(arg0: string): URLWrapper;
    setPort(arg0: number): URLWrapper;
    setProtocol(arg0: string): URLWrapper;
    setQuery(arg0: string): URLWrapper;
    setReference(arg0: string): URLWrapper;
    setUserInfo(arg0: string): URLWrapper;
    toString(): string;
    toURI(): URI;
    toURL(): URL;
    wrapQuery(): URLWrapper$QueryWrapper;
    wrapQueryParameters(): URLWrapper$QueryParametersWrapper;
}
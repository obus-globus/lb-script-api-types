import type { URI } from '../java/net/URI.d.ts'
import type { URL } from '../java/net/URL.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { HttpUrl$Builder } from '../okhttp3/HttpUrl$Builder.d.ts'
import type { HttpUrl$Companion } from '../okhttp3/HttpUrl$Companion.d.ts'
export class HttpUrl extends Object {
    static Companion: HttpUrl$Companion;
    static defaultPort(scheme: string): number;
    static get(self: string): HttpUrl;
    static get(self: URI): HttpUrl | null;
    static get(self: URL): HttpUrl | null;
    static parse(self: string): HttpUrl | null;
    private constructor(scheme: string, username: string, password: string, host: string, port: number, pathSegments: string[], queryNamesAndValues: (string | null)[] | null, fragment: string | null, url: string)
    encodedFragment(): string | null;
    encodedPassword(): string;
    encodedPath(): string;
    encodedPathSegments(): string[];
    encodedQuery(): string | null;
    encodedUsername(): string;
    // private fragment: string | null;
    fragment(): string | null;
    // private host: string;
    host(): string;
    /*not mapped: */ isHttps(): boolean;
    // private password: string;
    password(): string;
    // private pathSegments: string[];
    pathSegments(): string[];
    pathSize(): number;
    // private port: number;
    port(): number;
    query(): string | null;
    // private queryNamesAndValues: (string | null)[] | null;
    queryParameterNames(): string[];
    querySize(): number;
    // private scheme: string;
    scheme(): string;
    // private url: string;
    // private username: string;
    username(): string;
    encodedFragment(): string | null;
    encodedPassword(): string;
    encodedPath(): string;
    encodedPathSegments(): string[];
    encodedQuery(): string | null;
    encodedUsername(): string;
    equals(other: Object | null): boolean;
    fragment(): string | null;
    hashCode(): number;
    host(): string;
    newBuilder(): HttpUrl$Builder;
    newBuilder(link: string): HttpUrl$Builder | null;
    password(): string;
    pathSegments(): string[];
    pathSize(): number;
    port(): number;
    query(): string | null;
    queryParameter(name: string): string | null;
    queryParameterName(index: number): string;
    queryParameterNames(): string[];
    queryParameterValue(index: number): string | null;
    queryParameterValues(name: string): (string | null)[];
    querySize(): number;
    redact(): string;
    resolve(link: string): HttpUrl | null;
    scheme(): string;
    toString(): string;
    toUri(): URI;
    toUrl(): URL;
    topPrivateDomain(): string | null;
    uri(): URI;
    url(): URL;
    username(): string;
}
import type { URI } from '../java/net/URI.d.ts'
import type { URL } from '../java/net/URL.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
export class HttpUrl$Companion extends Object {
    defaultPort(scheme: string): number;
    get(uri: URI): HttpUrl | null;
    get(url: URL): HttpUrl | null;
    get(url: string): HttpUrl;
    parse(url: string): HttpUrl | null;
}
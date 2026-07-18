import type { URLBuilder } from '../../../io/ktor/http/URLBuilder.d.ts'
import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLUtilsJvmKt extends Object {
    static Url(uri: URI): Url;
    static takeFrom(self: URLBuilder, uri: URI): URLBuilder;
    static takeFrom(self: URLBuilder, url: URL): URLBuilder;
    static toURI(self: Url): URI;
}
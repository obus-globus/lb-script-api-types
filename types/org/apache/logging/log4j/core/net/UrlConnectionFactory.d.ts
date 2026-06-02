import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../../../java/net/URLConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
import type { AuthorizationProvider } from '../../../../../../org/apache/logging/log4j/core/util/AuthorizationProvider.d.ts'
export class UrlConnectionFactory extends Object {
    static ALLOWED_PROTOCOLS: string;
    static createConnection(paramurl: URL, paramlastModifiedMillis: number, paramsslConfiguration: SslConfiguration, paramauthorizationProvider: AuthorizationProvider): Object | null;
    static createConnection(paramurl: URL): URLConnection;
    constructor()
}
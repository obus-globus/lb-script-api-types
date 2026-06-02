import type { DefaultHttpClient } from '../../../../com/microsoft/aad/msal4j/DefaultHttpClient.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { HostnameVerifier } from '../../../../javax/net/ssl/HostnameVerifier.d.ts'
import type { HttpsURLConnection } from '../../../../javax/net/ssl/HttpsURLConnection.d.ts'
import type { SSLSocketFactory } from '../../../../javax/net/ssl/SSLSocketFactory.d.ts'
export class DefaultHttpClientManagedIdentity extends DefaultHttpClient {
    static ALL_HOSTS_ACCEPT_HOSTNAME_VERIFIER: HostnameVerifier;
    static addTrustedCertificateThumbprint(paramarg0: HttpsURLConnection, paramarg1: string): void;
    constructor(arg0: Proxy, arg1: SSLSocketFactory, arg2: number, arg3: number)
    openConnection(arg0: URL): HttpURLConnection;
}
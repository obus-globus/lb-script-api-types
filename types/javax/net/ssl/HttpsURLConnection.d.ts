import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { ContentHandlerFactory } from '../../../java/net/ContentHandlerFactory.d.ts'
import type { FileNameMap } from '../../../java/net/FileNameMap.d.ts'
import type { HttpURLConnection } from '../../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { HostnameVerifier } from '../../../javax/net/ssl/HostnameVerifier.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { SSLSocketFactory } from '../../../javax/net/ssl/SSLSocketFactory.d.ts'
export abstract class HttpsURLConnection extends HttpURLConnection {
    static HTTP_ACCEPTED: number;
    static HTTP_BAD_GATEWAY: number;
    static HTTP_BAD_METHOD: number;
    static HTTP_BAD_REQUEST: number;
    static HTTP_CLIENT_TIMEOUT: number;
    static HTTP_CONFLICT: number;
    static HTTP_CREATED: number;
    static HTTP_ENTITY_TOO_LARGE: number;
    static HTTP_FORBIDDEN: number;
    static HTTP_GATEWAY_TIMEOUT: number;
    static HTTP_GONE: number;
    static HTTP_INTERNAL_ERROR: number;
    static HTTP_LENGTH_REQUIRED: number;
    static HTTP_MOVED_PERM: number;
    static HTTP_MOVED_TEMP: number;
    static HTTP_MULT_CHOICE: number;
    static HTTP_NOT_ACCEPTABLE: number;
    static HTTP_NOT_AUTHORITATIVE: number;
    static HTTP_NOT_FOUND: number;
    static HTTP_NOT_IMPLEMENTED: number;
    static HTTP_NOT_MODIFIED: number;
    static HTTP_NO_CONTENT: number;
    static HTTP_OK: number;
    static HTTP_PARTIAL: number;
    static HTTP_PAYMENT_REQUIRED: number;
    static HTTP_PRECON_FAILED: number;
    static HTTP_PROXY_AUTH: number;
    static HTTP_REQ_TOO_LONG: number;
    static HTTP_RESET: number;
    static HTTP_SEE_OTHER: number;
    static HTTP_SERVER_ERROR: number;
    static HTTP_UNAUTHORIZED: number;
    static HTTP_UNAVAILABLE: number;
    static HTTP_UNSUPPORTED_TYPE: number;
    static HTTP_USE_PROXY: number;
    static HTTP_VERSION: number;
    static getDefaultAllowUserInteraction(): boolean;
    static getDefaultHostnameVerifier(): HostnameVerifier;
    static getDefaultRequestProperty(paramarg0: string): string;
    static getDefaultSSLSocketFactory(): SSLSocketFactory;
    static getDefaultUseCaches(paramarg0: string): boolean;
    static getFileNameMap(): FileNameMap;
    static getFollowRedirects(): boolean;
    static guessContentTypeFromName(paramarg0: string): string;
    static guessContentTypeFromStream(paramarg0: InputStream): string;
    static setContentHandlerFactory(paramarg0: ContentHandlerFactory): void;
    static setDefaultAllowUserInteraction(paramarg0: boolean): void;
    static setDefaultHostnameVerifier(paramarg0: HostnameVerifier): void;
    static setDefaultRequestProperty(paramarg0: string, paramarg1: string): void;
    static setDefaultSSLSocketFactory(paramarg0: SSLSocketFactory): void;
    static setDefaultUseCaches(paramarg0: string, paramarg1: boolean): void;
    static setFileNameMap(paramarg0: FileNameMap): void;
    static setFollowRedirects(paramarg0: boolean): void;
    constructor(arg0: URL)
    hostnameVerifier: HostnameVerifier;
    // private sslSocketFactory: SSLSocketFactory;
    getCipherSuite(): string;
    getHostnameVerifier(): HostnameVerifier;
    getLocalCertificates(): Certificate[];
    getLocalPrincipal(): Principal;
    getPeerPrincipal(): Principal;
    getSSLSession(): Optional<SSLSession>;
    getSSLSocketFactory(): SSLSocketFactory;
    getServerCertificates(): Certificate[];
    setHostnameVerifier(arg0: HostnameVerifier): void;
    setSSLSocketFactory(arg0: SSLSocketFactory): void;
}
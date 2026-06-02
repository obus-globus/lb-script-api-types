import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Authenticator } from '../../java/net/Authenticator.d.ts'
import type { ContentHandlerFactory } from '../../java/net/ContentHandlerFactory.d.ts'
import type { FileNameMap } from '../../java/net/FileNameMap.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { URLConnection } from '../../java/net/URLConnection.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
export abstract class HttpURLConnection extends URLConnection {
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
    static getDefaultRequestProperty(paramarg0: string): string;
    static getDefaultUseCaches(paramarg0: string): boolean;
    static getFileNameMap(): FileNameMap;
    static getFollowRedirects(): boolean;
    static guessContentTypeFromName(paramarg0: string): string;
    static guessContentTypeFromStream(paramarg0: InputStream): string;
    static setContentHandlerFactory(paramarg0: ContentHandlerFactory): void;
    static setDefaultAllowUserInteraction(paramarg0: boolean): void;
    static setDefaultRequestProperty(paramarg0: string, paramarg1: string): void;
    static setDefaultUseCaches(paramarg0: string, paramarg1: boolean): void;
    static setFileNameMap(paramarg0: FileNameMap): void;
    static setFollowRedirects(paramarg0: boolean): void;
    constructor(arg0: URL)
    // private chunkLength: number;
    // private fixedContentLength: number;
    // private fixedContentLengthLong: number;
    instanceFollowRedirects: boolean;
    // private method: string;
    responseCode: number;
    responseMessage: string;
    disconnect(): void;
    getErrorStream(): InputStream;
    getHeaderField(arg0: number): string;
    getHeaderFieldDate(arg0: string, arg1: number): number;
    getHeaderFieldKey(arg0: number): string;
    getInstanceFollowRedirects(): boolean;
    getPermission(): Permission;
    getRequestMethod(): string;
    getResponseCode(): number;
    getResponseMessage(): string;
    setAuthenticator(arg0: Authenticator): void;
    setChunkedStreamingMode(arg0: number): void;
    setFixedLengthStreamingMode(arg0: number): void;
    setFixedLengthStreamingMode(arg0: number): void;
    setInstanceFollowRedirects(arg0: boolean): void;
    setRequestMethod(arg0: string): void;
    usingProxy(): boolean;
}
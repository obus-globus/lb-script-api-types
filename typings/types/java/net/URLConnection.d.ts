import type { JavaMap } from '../../JavaMap.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ContentHandler } from '../../java/net/ContentHandler.d.ts'
import type { ContentHandlerFactory } from '../../java/net/ContentHandlerFactory.d.ts'
import type { FileNameMap } from '../../java/net/FileNameMap.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { MessageHeader } from '../../sun/net/www/MessageHeader.d.ts'
export abstract class URLConnection extends Object {
    static getDefaultAllowUserInteraction(): boolean;
    static getDefaultRequestProperty(paramarg0: string): string;
    static getDefaultUseCaches(paramarg0: string): boolean;
    static getFileNameMap(): FileNameMap;
    static guessContentTypeFromName(paramarg0: string): string;
    static guessContentTypeFromStream(paramarg0: InputStream): string;
    static setContentHandlerFactory(paramarg0: ContentHandlerFactory): void;
    static setDefaultAllowUserInteraction(paramarg0: boolean): void;
    static setDefaultRequestProperty(paramarg0: string, paramarg1: string): void;
    static setDefaultUseCaches(paramarg0: string, paramarg1: boolean): void;
    static setFileNameMap(paramarg0: FileNameMap): void;
    constructor(arg0: URL)
    allowUserInteraction: boolean;
    readonly connectTimeout: number;
    // private connected: boolean;
    doInput: boolean;
    doOutput: boolean;
    ifModifiedSince: number;
    readonly readTimeout: number;
    // private requests: MessageHeader;
    // private url: URL;
    useCaches: boolean;
    addRequestProperty(arg0: string, arg1: string): void;
    // private checkConnected(): void;
    connect(): void;
    getAllowUserInteraction(): boolean;
    getConnectTimeout(): number;
    getContent(): Object;
    getContent(arg0: Class<Object>[]): Object;
    getContentEncoding(): string;
    // private getContentHandler(): ContentHandler;
    // private getContentHandlerPkgPrefixes(): string;
    getContentLength(): number;
    getContentLengthLong(): number;
    getContentType(): string;
    getDate(): number;
    getDefaultUseCaches(): boolean;
    getDoInput(): boolean;
    getDoOutput(): boolean;
    getExpiration(): number;
    getHeaderField(arg0: number): string;
    getHeaderField(arg0: string): string;
    getHeaderFieldDate(arg0: string, arg1: number): number;
    getHeaderFieldInt(arg0: string, arg1: number): number;
    getHeaderFieldKey(arg0: number): string;
    getHeaderFieldLong(arg0: string, arg1: number): number;
    getHeaderFields(): JavaMap<string, string[]>;
    getIfModifiedSince(): number;
    getInputStream(): InputStream;
    getLastModified(): number;
    getOutputStream(): OutputStream;
    getPermission(): Permission;
    getReadTimeout(): number;
    getRequestProperties(): JavaMap<string, string[]>;
    getRequestProperty(arg0: string): string;
    getURL(): URL;
    getUseCaches(): boolean;
    // private lookupContentHandlerClassFor(arg0: string): ContentHandler;
    // private lookupContentHandlerViaProvider(arg0: string): ContentHandler;
    setAllowUserInteraction(arg0: boolean): void;
    setConnectTimeout(arg0: number): void;
    setDefaultUseCaches(arg0: boolean): void;
    setDoInput(arg0: boolean): void;
    setDoOutput(arg0: boolean): void;
    setIfModifiedSince(arg0: number): void;
    setReadTimeout(arg0: number): void;
    setRequestProperty(arg0: string, arg1: string): void;
    setUseCaches(arg0: boolean): void;
    // private stripOffParameters(arg0: string): string;
    toString(): string;
    // private typeToPackageName(arg0: string): string;
}
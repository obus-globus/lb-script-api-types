import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ContentHandlerFactory } from '../../../../java/net/ContentHandlerFactory.d.ts'
import type { FileNameMap } from '../../../../java/net/FileNameMap.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../java/net/URLConnection.d.ts'
export class MemoryURLConnection extends URLConnection {
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
    constructor(arg0: URL, arg1: number[])
    // private data: number[];
    connect(): void;
    getInputStream(): InputStream;
}
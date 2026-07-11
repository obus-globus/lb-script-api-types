import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiPartDownloadConfig } from '../../../../net/ccbluex/liquidbounce/mcef/MultiPartDownloadConfig.d.ts'
import type { OkHttpClient } from '../../../../okhttp3/OkHttpClient.d.ts'
export class MCEFSettings extends Object {
    constructor()
    readonly cacheDirectory: File;
    readonly cefSwitches: string[];
    readonly hosts: string[];
    readonly librariesDirectory: File;
    readonly multiPartDownloadConfig: MultiPartDownloadConfig;
    readonly okHttpClient: OkHttpClient;
    readonly userAgent: string;
    appendCefSwitches(...arg0: string[]): void;
    appendHosts(...arg0: string[]): void;
    getCacheDirectory(): File;
    getCefSwitches(): string[];
    getHosts(): string[];
    getLibrariesDirectory(): File;
    getMultiPartDownloadConfig(): MultiPartDownloadConfig;
    getOkHttpClient(): OkHttpClient;
    getUserAgent(): string;
    removeCefSwitches(...arg0: string[]): void;
    removeHosts(...arg0: string[]): void;
    setCacheDirectory(arg0: File): void;
    setCefSwitches(arg0: string[]): void;
    setHosts(arg0: string[]): void;
    setLibrariesDirectory(arg0: File): void;
    setMultiPartDownloadConfig(arg0: MultiPartDownloadConfig): void;
    setOkHttpClient(arg0: OkHttpClient): void;
    setUserAgent(arg0: string): void;
}
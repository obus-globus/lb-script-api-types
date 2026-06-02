import type { AbstractConfig } from '../../../../../../../org/apache/tika/pipes/fetcher/config/AbstractConfig.d.ts'
export class FileSystemFetcherConfig extends AbstractConfig {
    constructor()
    readonly basePath: string;
    readonly extractFileSystemMetadata: boolean;
    getBasePath(): string;
    isExtractFileSystemMetadata(): boolean;
    setBasePath(arg0: string): FileSystemFetcherConfig;
    setExtractFileSystemMetadata(arg0: boolean): FileSystemFetcherConfig;
}
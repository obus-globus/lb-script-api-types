import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { Property } from '../../../../../../org/apache/tika/metadata/Property.d.ts'
import type { ParseContext } from '../../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { AbstractFetcher } from '../../../../../../org/apache/tika/pipes/fetcher/AbstractFetcher.d.ts'
import type { FileSystemFetcherConfig } from '../../../../../../org/apache/tika/pipes/fetcher/fs/config/FileSystemFetcherConfig.d.ts'
export class FileSystemFetcher extends AbstractFetcher implements Initializable {
    constructor()
    constructor(arg0: FileSystemFetcherConfig)
    readonly basePath: Path[];
    readonly extractFileSystemMetadata: boolean;
    checkInitialization(arg0: InitializableProblemHandler): void;
    fetch(arg0: string, arg1: Metadata, arg2: ParseContext): InputStream;
    getBasePath(): Path[];
    initialize(arg0: { [key: string]: Param<Object> }): void;
    setBasePath(arg0: string): void;
    setExtractFileSystemMetadata(arg0: boolean): void;
    // private updateFileSystemMetadata(arg0: Path[], arg1: Metadata): void;
    // private updateFileTime(arg0: Property, arg1: FileTime, arg2: Metadata): void;
}
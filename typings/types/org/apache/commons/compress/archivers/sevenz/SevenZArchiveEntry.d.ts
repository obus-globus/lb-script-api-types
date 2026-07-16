import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { SevenZMethodConfiguration } from '../../../../../../org/apache/commons/compress/archivers/sevenz/SevenZMethodConfiguration.d.ts'
export class SevenZArchiveEntry extends Object implements ArchiveEntry {
    static SIZE_UNKNOWN: number;
    static javaTimeToNtfsTime(paramarg0: Date): number;
    static ntfsTimeToJavaTime(paramarg0: number): Date;
    constructor()
    readonly accessDate: FileTime;
    // private compressedCrc: number;
    // private compressedSize: number;
    readonly contentMethods: SevenZMethodConfiguration[];
    readonly crc: number;
    readonly creationDate: FileTime;
    readonly hasAccessDate: boolean;
    readonly hasCrc: boolean;
    readonly hasCreationDate: boolean;
    readonly hasLastModifiedDate: boolean;
    readonly hasWindowsAttributes: boolean;
    // private isAntiItem: boolean;
    // private isDirectory: boolean;
    readonly lastModifiedDate: FileTime;
    readonly name: string;
    readonly size: number;
    readonly windowsAttributes: number;
    // private equalSevenZMethods(arg0: SevenZMethodConfiguration[], arg1: SevenZMethodConfiguration[]): boolean;
    equals(arg0: Object | null): boolean;
    getAccessDate(): Date;
    getAccessTime(): FileTime;
    getCompressedCrc(): number;
    getCompressedCrcValue(): number;
    getCompressedSize(): number;
    getContentMethods(): SevenZMethodConfiguration[];
    getCrc(): number;
    getCrcValue(): number;
    getCreationDate(): Date;
    getCreationTime(): FileTime;
    getHasAccessDate(): boolean;
    getHasCrc(): boolean;
    getHasCreationDate(): boolean;
    getHasLastModifiedDate(): boolean;
    getHasWindowsAttributes(): boolean;
    getLastModifiedDate(): Date;
    getLastModifiedTime(): FileTime;
    getName(): string;
    getSize(): number;
    getWindowsAttributes(): number;
    hasStream(): boolean;
    hashCode(): number;
    isAntiItem(): boolean;
    isDirectory(): boolean;
    isEmptyStream(): boolean;
    resolveIn(arg0: Path): Path;
    setAccessDate(arg0: Date): void;
    setAccessDate(arg0: number): void;
    setAccessTime(arg0: FileTime): void;
    setAntiItem(arg0: boolean): void;
    setCompressedCrc(arg0: number): void;
    setCompressedCrcValue(arg0: number): void;
    setCompressedSize(arg0: number): void;
    setContentMethods(...arg0: SevenZMethodConfiguration[]): void;
    setContentMethods(arg0: SevenZMethodConfiguration[]): void;
    setCrc(arg0: number): void;
    setCrcValue(arg0: number): void;
    setCreationDate(arg0: Date): void;
    setCreationDate(arg0: number): void;
    setCreationTime(arg0: FileTime): void;
    setDirectory(arg0: boolean): void;
    setHasAccessDate(arg0: boolean): void;
    setHasCrc(arg0: boolean): void;
    setHasCreationDate(arg0: boolean): void;
    setHasLastModifiedDate(arg0: boolean): void;
    setHasStream(arg0: boolean): void;
    setHasWindowsAttributes(arg0: boolean): void;
    setLastModifiedDate(arg0: Date): void;
    setLastModifiedDate(arg0: number): void;
    setLastModifiedTime(arg0: FileTime): void;
    setName(arg0: string): void;
    setSize(arg0: number): void;
    setWindowsAttributes(arg0: number): void;
}
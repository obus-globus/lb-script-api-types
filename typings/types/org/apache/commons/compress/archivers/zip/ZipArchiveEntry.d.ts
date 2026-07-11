import type { File } from '../../../../../../java/io/File.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ZipEntry } from '../../../../../../java/util/zip/ZipEntry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { EntryStreamOffsets } from '../../../../../../org/apache/commons/compress/archivers/EntryStreamOffsets.d.ts'
import type { ExtraFieldParsingBehavior } from '../../../../../../org/apache/commons/compress/archivers/zip/ExtraFieldParsingBehavior.d.ts'
import type { GeneralPurposeBit } from '../../../../../../org/apache/commons/compress/archivers/zip/GeneralPurposeBit.d.ts'
import type { UnparseableExtraFieldData } from '../../../../../../org/apache/commons/compress/archivers/zip/UnparseableExtraFieldData.d.ts'
import type { ZipArchiveEntry$CommentSource } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry$CommentSource.d.ts'
import type { ZipArchiveEntry$NameSource } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipArchiveEntry$NameSource.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class ZipArchiveEntry extends ZipEntry implements ArchiveEntry, EntryStreamOffsets {
    static CENATT: number;
    static CENATX: number;
    static CENCOM: number;
    static CENCRC: number;
    static CENDSK: number;
    static CENEXT: number;
    static CENFLG: number;
    static CENHDR: number;
    static CENHOW: number;
    static CENLEN: number;
    static CENNAM: number;
    static CENOFF: number;
    static CENSIG: number;
    static CENSIZ: number;
    static CENTIM: number;
    static CENVEM: number;
    static CENVER: number;
    static CRC_UNKNOWN: number;
    static DEFLATED: number;
    static ENDCOM: number;
    static ENDHDR: number;
    static ENDOFF: number;
    static ENDSIG: number;
    static ENDSIZ: number;
    static ENDSUB: number;
    static ENDTOT: number;
    static EXTCRC: number;
    static EXTHDR: number;
    static EXTLEN: number;
    static EXTSIG: number;
    static EXTSIZ: number;
    static LOCCRC: number;
    static LOCEXT: number;
    static LOCFLG: number;
    static LOCHDR: number;
    static LOCHOW: number;
    static LOCLEN: number;
    static LOCNAM: number;
    static LOCSIG: number;
    static LOCSIZ: number;
    static LOCTIM: number;
    static LOCVER: number;
    static OFFSET_UNKNOWN: number;
    static PLATFORM_FAT: number;
    static PLATFORM_UNIX: number;
    static SIZE_UNKNOWN: number;
    static STORED: number;
    constructor()
    constructor(arg0: File, arg1: string)
    constructor(arg0: Path[], arg1: string, ...arg2: LinkOption[])
    constructor(arg0: ZipEntry)
    constructor(arg0: string)
    constructor(arg0: ZipArchiveEntry)
    readonly alignment: number;
    readonly commentSource: ZipArchiveEntry$CommentSource;
    readonly dataOffset: number;
    readonly diskNumberStart: number;
    readonly externalAttributes: number;
    // private extraFieldFactory: (param0: ZipShort) => ZipExtraField;
    readonly extraFields: ZipExtraField[];
    readonly generalPurposeBit: GeneralPurposeBit;
    readonly internalAttributes: number;
    // private isStreamContiguous: boolean;
    // private lastModifiedDateSet: boolean;
    readonly localHeaderOffset: number;
    readonly method: number;
    readonly name: string;
    readonly nameSource: ZipArchiveEntry$NameSource;
    readonly platform: number;
    readonly rawFlag: number;
    readonly rawName: number[];
    readonly size: number;
    readonly time: number;
    // private unparseableExtra: UnparseableExtraFieldData;
    readonly versionMadeBy: number;
    readonly versionRequired: number;
    addAsFirstExtraField(arg0: ZipExtraField): void;
    addExtraField(arg0: ZipExtraField): void;
    // private addInfoZipExtendedTimestamp(arg0: FileTime, arg1: FileTime, arg2: FileTime): void;
    // private addNTFSTimestamp(arg0: FileTime, arg1: FileTime, arg2: FileTime): void;
    clone(): Object;
    // private copyOf(arg0: ZipExtraField[], arg1: number): ZipExtraField[];
    equals(arg0: Object | null): boolean;
    // private findMatching(arg0: ZipShort, arg1: ZipExtraField[]): ZipExtraField;
    // private findUnparseable(arg0: ZipExtraField[]): ZipExtraField;
    getAlignment(): number;
    // private getAllExtraFields(): ZipExtraField[];
    // private getAllExtraFieldsNoCopy(): ZipExtraField[];
    getCentralDirectoryExtra(): number[];
    getCommentSource(): ZipArchiveEntry$CommentSource;
    getDataOffset(): number;
    getDiskNumberStart(): number;
    getExternalAttributes(): number;
    getExtraField(arg0: ZipShort): ZipExtraField;
    getExtraFields(): ZipExtraField[];
    getExtraFields(arg0: boolean): ZipExtraField[];
    getExtraFields(arg0: ExtraFieldParsingBehavior): ZipExtraField[];
    getGeneralPurposeBit(): GeneralPurposeBit;
    getInternalAttributes(): number;
    getLastModifiedDate(): Date;
    getLocalFileDataExtra(): number[];
    getLocalHeaderOffset(): number;
    // private getMergedFields(): ZipExtraField[];
    getMethod(): number;
    getName(): string;
    getNameSource(): ZipArchiveEntry$NameSource;
    // private getParseableExtraFields(): ZipExtraField[];
    // private getParseableExtraFieldsNoCopy(): ZipExtraField[];
    getPlatform(): number;
    getRawFlag(): number;
    getRawName(): number[];
    getSize(): number;
    getTime(): number;
    getUnixMode(): number;
    getUnparseableExtraFieldData(): UnparseableExtraFieldData;
    // private getUnparseableOnly(): ZipExtraField[];
    getVersionMadeBy(): number;
    getVersionRequired(): number;
    hashCode(): number;
    // private internalAddExtraField(arg0: ZipExtraField): void;
    // private internalRemoveExtraField(arg0: ZipShort): void;
    // private internalSetLastModifiedTime(arg0: FileTime): void;
    isDirectory(): boolean;
    isStreamContiguous(): boolean;
    isUnixSymlink(): boolean;
    // private mergeExtraFields(arg0: ZipExtraField[], arg1: boolean): void;
    // private parseExtraFields(arg0: number[], arg1: boolean, arg2: ExtraFieldParsingBehavior): ZipExtraField[];
    removeExtraField(arg0: ZipShort): void;
    removeUnparseableExtraFieldData(): void;
    // private requiresExtraTimeFields(): boolean;
    resolveIn(arg0: Path[]): Path[];
    setAlignment(arg0: number): void;
    // private setAttributes(arg0: Path[], ...arg1: LinkOption[]): void;
    setCentralDirectoryExtra(arg0: number[]): void;
    setCommentSource(arg0: ZipArchiveEntry$CommentSource): void;
    setCreationTime(arg0: FileTime): ZipEntry;
    setDataOffset(arg0: number): void;
    setDiskNumberStart(arg0: number): void;
    setExternalAttributes(arg0: number): void;
    setExtra(): void;
    setExtra(arg0: number[]): void;
    setExtraFields(arg0: ZipExtraField[]): void;
    // private setExtraTimeFields(): void;
    setGeneralPurposeBit(arg0: GeneralPurposeBit): void;
    setInternalAttributes(arg0: number): void;
    setLastAccessTime(arg0: FileTime): ZipEntry;
    setLastModifiedTime(arg0: FileTime): ZipEntry;
    setLocalHeaderOffset(arg0: number): void;
    setMethod(arg0: number): void;
    setName(arg0: string): void;
    setName(arg0: string, arg1: number[]): void;
    setNameSource(arg0: ZipArchiveEntry$NameSource): void;
    setPlatform(arg0: number): void;
    setRawFlag(arg0: number): void;
    setSize(arg0: number): void;
    setStreamContiguous(arg0: boolean): void;
    setTime(arg0: FileTime): void;
    setTime(arg0: number): void;
    setUnixMode(arg0: number): void;
    setVersionMadeBy(arg0: number): void;
    setVersionRequired(arg0: number): void;
    // private updateTimeFieldsFromExtraFields(): void;
    // private updateTimeFromExtendedTimestampField(): void;
    // private updateTimeFromNtfsField(): void;
}
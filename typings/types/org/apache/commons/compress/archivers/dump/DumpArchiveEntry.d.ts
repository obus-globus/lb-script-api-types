import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { DumpArchiveConstants$SEGMENT_TYPE } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveConstants$SEGMENT_TYPE.d.ts'
import type { DumpArchiveEntry$PERMISSION } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveEntry$PERMISSION.d.ts'
import type { DumpArchiveEntry$TYPE } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveEntry$TYPE.d.ts'
import type { DumpArchiveEntry$TapeSegmentHeader } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveEntry$TapeSegmentHeader.d.ts'
import type { DumpArchiveSummary } from '../../../../../../org/apache/commons/compress/archivers/dump/DumpArchiveSummary.d.ts'
export class DumpArchiveEntry extends Object implements ArchiveEntry {
    static SIZE_UNKNOWN: number;
    constructor()
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: number, arg3: DumpArchiveEntry$TYPE)
    // private atime: number;
    // private ctime: number;
    readonly generation: number;
    // private gid: number;
    // private header: DumpArchiveEntry$TapeSegmentHeader;
    readonly ino: number;
    // private isDeleted: boolean;
    readonly mode: number;
    // private mtime: number;
    readonly name: string;
    readonly nlink: number;
    readonly offset: number;
    // private originalName: string;
    readonly permissions: DumpArchiveEntry$PERMISSION[];
    readonly simpleName: string;
    readonly size: number;
    // private summary: DumpArchiveSummary;
    readonly type: DumpArchiveEntry$TYPE;
    // private uid: number;
    readonly volume: number;
    equals(arg0: Object | null): boolean;
    getAccessTime(): Date;
    getCreationTime(): Date;
    getEntrySize(): number;
    getGeneration(): number;
    getGroupId(): number;
    getHeaderCount(): number;
    getHeaderHoles(): number;
    getHeaderType(): DumpArchiveConstants$SEGMENT_TYPE;
    getIno(): number;
    getLastModifiedDate(): Date;
    getMode(): number;
    getName(): string;
    getNlink(): number;
    getOffset(): number;
    getOriginalName(): string;
    getPermissions(): DumpArchiveEntry$PERMISSION[];
    getSimpleName(): string;
    getSize(): number;
    getType(): DumpArchiveEntry$TYPE;
    getUserId(): number;
    getVolume(): number;
    hashCode(): number;
    isBlkDev(): boolean;
    isChrDev(): boolean;
    isDeleted(): boolean;
    isDirectory(): boolean;
    isFifo(): boolean;
    isFile(): boolean;
    isSocket(): boolean;
    isSparseRecord(arg0: number): boolean;
    resolveIn(arg0: Path[]): Path[];
    setAccessTime(arg0: Date): void;
    setCreationTime(arg0: Date): void;
    setDeleted(arg0: boolean): void;
    setGeneration(arg0: number): void;
    setGroupId(arg0: number): void;
    setLastModifiedDate(arg0: Date): void;
    setMode(arg0: number): void;
    setName(arg0: string): void;
    setNlink(arg0: number): void;
    setOffset(arg0: number): void;
    setSimpleName(arg0: string): void;
    setSize(arg0: number): void;
    setType(arg0: DumpArchiveEntry$TYPE): void;
    setUserId(arg0: number): void;
    setVolume(arg0: number): void;
    toString(): string;
    update(arg0: number[]): void;
}
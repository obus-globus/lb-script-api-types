import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { LocalFileHeader } from '../../../../../../org/apache/commons/compress/archivers/arj/LocalFileHeader.d.ts'
export class ArjArchiveEntry extends Object implements ArchiveEntry {
    static SIZE_UNKNOWN: number;
    constructor()
    constructor(arg0: LocalFileHeader)
    // private localFileHeader: LocalFileHeader;
    equals(arg0: Object | null): boolean;
    getHostOs(): number;
    getLastModifiedDate(): Date;
    getMethod(): number;
    getMode(): number;
    getName(): string;
    getSize(): number;
    getUnixMode(): number;
    hashCode(): number;
    isDirectory(): boolean;
    isHostOsUnix(): boolean;
    resolveIn(arg0: Path): Path;
}
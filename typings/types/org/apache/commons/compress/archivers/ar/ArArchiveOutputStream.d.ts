import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { ArchiveOutputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveOutputStream.d.ts'
import type { ArArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ar/ArArchiveEntry.d.ts'
export class ArArchiveOutputStream extends ArchiveOutputStream<ArArchiveEntry> {
    static LONGFILE_BSD: number;
    static LONGFILE_ERROR: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    // private entryOffset: number;
    // private headerPlus: number;
    readonly longFileMode: number;
    // private prevEntry: ArArchiveEntry;
    // private prevEntryOpen: boolean;
    // private checkLength(arg0: string, arg1: number, arg2: string): string;
    close(): void;
    closeArchiveEntry(): void;
    createArchiveEntry(arg0: File, arg1: string): ArArchiveEntry;
    createArchiveEntry(arg0: Path[], arg1: string, arg2: LinkOption[]): ArArchiveEntry;
    finish(): void;
    // private pad(arg0: number, arg1: number, arg2: string): number;
    putArchiveEntry(arg0: ArArchiveEntry): void;
    setLongFileMode(arg0: number): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    // private write(arg0: string): number;
    // private writeArchiveHeader(): number[];
    // private writeEntryHeader(arg0: ArArchiveEntry): number;
}
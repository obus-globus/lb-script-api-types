import type { File } from '../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { CompressFilterOutputStream } from '../../../../../org/apache/commons/compress/CompressFilterOutputStream.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export abstract class ArchiveOutputStream<E extends ArchiveEntry> extends CompressFilterOutputStream<OutputStream> {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: OutputStream)
    readonly bytesWritten: number;
    // private oneByte: number[];
    canWriteEntryData(arg0: ArchiveEntry): boolean;
    checkFinished(): void;
    closeArchiveEntry(): void;
    count(arg0: number): void;
    createArchiveEntry(arg0: File, arg1: string): E;
    createArchiveEntry(arg0: Path[], arg1: string, ...arg2: LinkOption[]): E;
    getBytesWritten(): number;
    getCount(): number;
    putArchiveEntry(arg0: E): void;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}
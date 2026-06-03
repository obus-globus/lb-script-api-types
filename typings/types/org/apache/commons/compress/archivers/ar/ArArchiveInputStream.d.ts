import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArchiveInputStream } from '../../../../../../org/apache/commons/compress/archivers/ArchiveInputStream.d.ts'
import type { ArArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ar/ArArchiveEntry.d.ts'
export class ArArchiveInputStream extends ArchiveInputStream<ArArchiveEntry> {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private closed: boolean;
    // private currentEntry: ArArchiveEntry;
    // private entryOffset: number;
    // private metaData: number[];
    // private namebuffer: number[];
    // private offset: number;
    // private asInt(arg0: number[], arg1: number, arg2: number): number;
    // private asInt(arg0: number[], arg1: number, arg2: number, arg3: boolean): number;
    // private asInt(arg0: number[], arg1: number, arg2: number, arg3: number): number;
    // private asInt(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: boolean): number;
    // private asLong(arg0: number[], arg1: number, arg2: number): number;
    close(): void;
    // private getBSDLongName(arg0: string): string;
    // private getExtendedName(arg0: number): string;
    getNextArEntry(): ArArchiveEntry;
    getNextEntry(): ArArchiveEntry;
    // private isGNULongName(arg0: string): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readGNUStringTable(arg0: number[], arg1: number, arg2: number): ArArchiveEntry;
    // private trackReadBytes(arg0: number): void;
}
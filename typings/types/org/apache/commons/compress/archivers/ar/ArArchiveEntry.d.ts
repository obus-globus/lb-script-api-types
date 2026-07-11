import type { File } from '../../../../../../java/io/File.d.ts'
import type { LinkOption } from '../../../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
export class ArArchiveEntry extends Object implements ArchiveEntry {
    static HEADER: string;
    static SIZE_UNKNOWN: number;
    static TRAILER: string;
    constructor(arg0: File, arg1: string)
    constructor(arg0: Path[], arg1: string, ...arg2: LinkOption[])
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    readonly groupId: number;
    readonly lastModified: number;
    readonly length: number;
    readonly mode: number;
    readonly name: string;
    readonly userId: number;
    equals(arg0: Object | null): boolean;
    getGroupId(): number;
    getLastModified(): number;
    getLastModifiedDate(): Date;
    getLength(): number;
    getMode(): number;
    getName(): string;
    getSize(): number;
    getUserId(): number;
    hashCode(): number;
    isDirectory(): boolean;
    resolveIn(arg0: Path[]): Path[];
}
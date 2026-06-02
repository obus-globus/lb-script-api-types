import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { Change$ChangeType } from '../../../../../org/apache/commons/compress/changes/Change$ChangeType.d.ts'
export class Change<E extends ArchiveEntry> extends Object {
    constructor(arg0: E, arg1: InputStream, arg2: boolean)
    constructor(arg0: string, arg1: Change$ChangeType)
    // private entry: E;
    // private inputStream: InputStream;
    // private replaceMode: boolean;
    // private targetFileName: string;
    // private type: Change$ChangeType;
    getEntry(): E;
    getInputStream(): InputStream;
    getTargetFileName(): string;
    getType(): Change$ChangeType;
    isReplaceMode(): boolean;
}
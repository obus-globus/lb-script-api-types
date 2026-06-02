import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ArchiveEntry } from '../../../../../org/apache/commons/compress/archivers/ArchiveEntry.d.ts'
import type { Change } from '../../../../../org/apache/commons/compress/changes/Change.d.ts'
export class ChangeSet<E extends ArchiveEntry> extends Object {
    constructor()
    // private changes: Change<E>[];
    add(arg0: E, arg1: InputStream): void;
    add(arg0: E, arg1: InputStream, arg2: boolean): void;
    // private addAddition(arg0: Change<E>): void;
    // private addDeletion(arg0: Change<E>): void;
    delete(arg0: string): void;
    deleteDir(arg0: string): void;
    getChanges(): Change<E>[];
}
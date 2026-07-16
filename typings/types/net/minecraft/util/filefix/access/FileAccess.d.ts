import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAccessProvider } from '../../../../../net/minecraft/util/filefix/access/FileAccessProvider.d.ts'
import type { FileRelation } from '../../../../../net/minecraft/util/filefix/access/FileRelation.d.ts'
import type { FileResourceType } from '../../../../../net/minecraft/util/filefix/access/FileResourceType.d.ts'
export class FileAccess<T extends AutoCloseable> extends Object implements AutoCloseable {
    constructor(fileAccessProvider: FileAccessProvider, type: FileResourceType<T>, fileRelation: (param0: Path) => Path[])
    // private fileAccessProvider: FileAccessProvider;
    // private fileRelation: (param0: Path) => Path[];
    // private files: T[];
    // private type: FileResourceType<T>;
    close(): void;
    get(): T[];
    getOnlyFile(): T;
}
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { ScopedValue } from '../../../../../java/lang/ScopedValue.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAccess } from '../../../../../net/minecraft/util/filefix/access/FileAccess.d.ts'
import type { FileRelation } from '../../../../../net/minecraft/util/filefix/access/FileRelation.d.ts'
import type { FileResourceType } from '../../../../../net/minecraft/util/filefix/access/FileResourceType.d.ts'
export class FileAccessProvider extends Object implements AutoCloseable {
    constructor(dataVersion: number)
    // private accessedFiles: FileAccess<Object>[];
    // private baseDirectory: ScopedValue<Path[]>;
    // private dataVersion: number;
    // private frozen: boolean;
    baseDirectory(): ScopedValue<Path[]>;
    close(): void;
    dataVersion(): number;
    freeze(): void;
    getFileAccess<T extends AutoCloseable>(type: FileResourceType<T>, fileRelation: (param0: Path[][]) => Path[][][]): FileAccess<T>;
}
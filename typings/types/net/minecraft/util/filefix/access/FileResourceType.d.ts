import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileResourceType$AccessFactory } from '../../../../../net/minecraft/util/filefix/access/FileResourceType$AccessFactory.d.ts'
export class FileResourceType<T extends AutoCloseable> extends Object {
    constructor(factory: (param0: Path, param1: number) => T)
    // private factory: (param0: Path, param1: number) => T;
    create(path: Path, dataVersion: number): T;
}
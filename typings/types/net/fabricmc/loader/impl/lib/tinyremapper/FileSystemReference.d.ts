import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { FileSystem } from '../../../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileSystemReference extends Object implements Closeable {
    static open(paramarg0: URI, paramarg1: boolean): FileSystemReference;
    static openJar(paramarg0: Path): FileSystemReference;
    static openJar(paramarg0: Path, paramarg1: boolean): FileSystemReference;
    private constructor(arg0: FileSystem)
    // private closed: boolean;
    // private fileSystem: FileSystem;
    close(): void;
    getPath(arg0: string, ...arg1: string[]): Path;
    isReadOnly(): boolean;
    toString(): string;
}
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class FileSystems$CompositeFileSystem$FileSystemInfo extends Record {
    private constructor(fileSystem: FileSystem, path: Path[])
    // private fileSystem: FileSystem;
    // private path: Path[];
    equals(o: Object | null): boolean;
    fileSystem(): FileSystem;
    hashCode(): number;
    path(): Path[];
    toString(): string;
}
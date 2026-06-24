import type { Object } from '../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../kotlinx/io/files/FileSystem.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export class FileSystemJvmKt extends Object {
    static SystemFileSystem: FileSystem;
    static SystemTemporaryDirectory: Path;
}
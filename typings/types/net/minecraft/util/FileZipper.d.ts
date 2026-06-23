import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { FileSystem } from '../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FileZipper extends Object implements Closeable {
    constructor(outputFile: Path[])
    // private fs: FileSystem;
    // private outputFile: Path[];
    // private tempFile: Path[];
    add(path: Path[]): void;
    add(destinationRelativePath: Path[], file: File): void;
    add(destinationRelativePath: Path[], content: string): void;
    close(): void;
}
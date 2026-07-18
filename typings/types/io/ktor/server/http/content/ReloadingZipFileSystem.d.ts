import type { FileSystemPaths } from '../../../../../io/ktor/server/http/content/FileSystemPaths.d.ts'
import type { FileSystemPaths$Companion } from '../../../../../io/ktor/server/http/content/FileSystemPaths$Companion.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { WatchService } from '../../../../../java/nio/file/WatchService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReloadingZipFileSystem extends Object implements FileSystemPaths {
    static Companion: FileSystemPaths$Companion;
    constructor(zip: Path, classLoader: ClassLoader, delegate: FileSystemPaths)
    // private classLoader: ClassLoader;
    // private delegate: FileSystemPaths;
    // private watchService: WatchService;
    // private zip: Path;
    getPath(first: string, ...more: string[]): Path;
}
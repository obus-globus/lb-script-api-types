import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileSystemProvider } from '../../../../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FileSystemProviders extends Object {
    static getFileSystemProvider(paramarg0: Path): FileSystemProvider;
    static installed(): FileSystemProviders;
    private constructor(arg0: FileSystemProvider[])
    // private providers: FileSystemProvider[];
    getFileSystemProvider(arg0: URI): FileSystemProvider;
    getFileSystemProvider(arg0: URL): FileSystemProvider;
    getFileSystemProvider(arg0: string): FileSystemProvider;
}
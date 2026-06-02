import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileSystemUtil$FileSystemDelegate } from '../../../../../net/fabricmc/loader/impl/util/FileSystemUtil$FileSystemDelegate.d.ts'
export class FileSystemUtil extends Object {
    static getJarFileSystem(paramarg0: URI, paramarg1: boolean): FileSystemUtil$FileSystemDelegate;
    static getJarFileSystem(paramarg0: Path[][], paramarg1: boolean): FileSystemUtil$FileSystemDelegate;
    private constructor()
}
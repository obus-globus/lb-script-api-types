import type { File } from '../../../../java/io/File.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Files extends Object {
    static deleteRecursively(paramarg0: File): void;
    static toFile(paramarg0: URI): File;
    static toFile(paramarg0: URL): File;
    private constructor()
}
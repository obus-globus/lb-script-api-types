import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileSystemUtil extends Object {
    static getFilesInDirectory(paramarg0: string): JavaMap<Path, number[]>;
    constructor()
}
import type { File } from '../../../../java/io/File.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
export class FileExistsException extends IOException {
    constructor()
    constructor(arg0: File)
    constructor(arg0: string)
}
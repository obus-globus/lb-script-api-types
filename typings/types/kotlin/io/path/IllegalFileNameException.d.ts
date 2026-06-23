import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { FileSystemException } from '../../../java/nio/file/FileSystemException.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
export class IllegalFileNameException extends FileSystemException implements Serializable {
    constructor(file: Path[][])
    constructor(file: Path[][], other: Path[][] | null, message: string | null)
}
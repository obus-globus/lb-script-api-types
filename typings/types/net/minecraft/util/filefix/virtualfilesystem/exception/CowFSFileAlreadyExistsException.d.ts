import type { FileAlreadyExistsException } from '../../../../../../java/nio/file/FileAlreadyExistsException.d.ts'
export class CowFSFileAlreadyExistsException extends FileAlreadyExistsException {
    constructor(message: string)
}
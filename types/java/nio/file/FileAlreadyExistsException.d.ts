import type { FileSystemException } from '../../../java/nio/file/FileSystemException.d.ts'
export class FileAlreadyExistsException extends FileSystemException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string, arg2: string)
}
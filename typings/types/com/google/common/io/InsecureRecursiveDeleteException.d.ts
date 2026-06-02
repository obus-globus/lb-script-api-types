import type { FileSystemException } from '../../../../java/nio/file/FileSystemException.d.ts'
export class InsecureRecursiveDeleteException extends FileSystemException {
    constructor(file: string)
}
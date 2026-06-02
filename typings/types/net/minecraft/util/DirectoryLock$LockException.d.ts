import type { IOException } from '../../../java/io/IOException.d.ts'
export class DirectoryLock$LockException extends IOException {
    static alreadyLocked(parampath: Path[][]): DirectoryLock$LockException;
    private constructor(path: Path[], message: string)
}
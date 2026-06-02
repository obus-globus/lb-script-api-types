import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export abstract class AbstractPolyglotImpl$IOAccessor extends Object {
    constructor()
    createIOAccess(name: string, allowHostFileAccess: boolean, allowSocketAccess: boolean, fileSystem: FileSystem): Object;
    createVetoException(message: string): Exception;
    getFileSystem(ioAccess: Object): FileSystem;
    hasHostFileAccess(ioAccess: Object): boolean;
    hasHostSocketAccess(ioaccess: Object): boolean;
    isVetoException(exception: Throwable): boolean;
}
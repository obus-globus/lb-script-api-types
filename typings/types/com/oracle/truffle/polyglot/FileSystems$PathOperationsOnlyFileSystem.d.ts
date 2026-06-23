import type { FileSystems$DeniedIOFileSystem } from '../../../../com/oracle/truffle/polyglot/FileSystems$DeniedIOFileSystem.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class FileSystems$PathOperationsOnlyFileSystem extends FileSystems$DeniedIOFileSystem {
    constructor(fileSystem: FileSystem)
    // private delegateFileSystem: FileSystem;
    hasNoAccess(): boolean;
    isInternal(polyglot: AbstractPolyglotImpl): boolean;
    isSameFile(path1: Path[], path2: Path[], options: LinkOption[]): boolean;
    setCurrentWorkingDirectory(currentWorkingDirectory: Path[]): void;
    toAbsolutePath(path: Path[]): Path[];
    toRealPath(path: Path[], linkOptions: LinkOption[]): Path[];
}
import type { InternalResourceRoots } from '../../../../com/oracle/truffle/polyglot/InternalResourceRoots.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { FileSystem$Selector } from '../../../../org/graalvm/polyglot/io/FileSystem$Selector.d.ts'
export class FileSystems$InternalResourcesSelector extends FileSystem$Selector {
    static of(paramfileSystem: FileSystem, parampredicate: (param0: Path[][]) => boolean): FileSystem$Selector;
    constructor(fileSystem: FileSystem, resourceRoots: InternalResourceRoots, languageHomes: Path[][])
    // private languageHomes: Path[][];
    // private resourceRoots: InternalResourceRoots;
    test(path: Path[]): boolean;
}
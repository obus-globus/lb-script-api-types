import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export abstract class FileSystem$Selector extends Object implements Predicate<Path[]> {
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static of(paramfileSystem: FileSystem, parampredicate: (param0: Path[][]) => boolean): FileSystem$Selector;
    constructor(fileSystem: FileSystem)
    readonly fileSystem: FileSystem;
    and(arg0: (param0: Path[]) => boolean): (param0: Path[]) => boolean;
    getFileSystem(): FileSystem;
    negate(): (param0: Path[]) => boolean;
    or(arg0: (param0: Path[]) => boolean): (param0: Path[]) => boolean;
    test(path: Path[]): boolean;
}
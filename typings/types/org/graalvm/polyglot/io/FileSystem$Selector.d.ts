import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export abstract class FileSystem$Selector extends Object implements Predicate<Path[]> {
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramfileSystem: FileSystem, parampredicate: (param0: Path[][]) => kotlin.Boolean): FileSystem$Selector;
    constructor(fileSystem: FileSystem)
    readonly fileSystem: FileSystem;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    getFileSystem(): FileSystem;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(path: Path[]): boolean;
}
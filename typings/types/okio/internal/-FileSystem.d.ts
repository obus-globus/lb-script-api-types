import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequenceScope } from '../../kotlin/sequences/SequenceScope.d.ts'
import type { FileMetadata } from '../../okio/FileMetadata.d.ts'
import type { FileSystem } from '../../okio/FileSystem.d.ts'
import type { Path } from '../../okio/Path.d.ts'
export class -FileSystem extends Object {
    static collectRecursively(paramarg0: SequenceScope<Object>, paramarg1: FileSystem, paramarg2: Path[], paramarg3: Path, paramarg4: boolean, paramarg5: boolean, paramarg6: Continuation<Object>): Object;
    static commonCopy(paramarg0: FileSystem, paramarg1: Path, paramarg2: Path): void;
    static commonCreateDirectories(paramarg0: FileSystem, paramarg1: Path, paramarg2: boolean): void;
    static commonDeleteRecursively(paramarg0: FileSystem, paramarg1: Path, paramarg2: boolean): void;
    static commonExists(paramarg0: FileSystem, paramarg1: Path): boolean;
    static commonListRecursively(paramarg0: FileSystem, paramarg1: Path, paramarg2: boolean): Sequence<Path>;
    static commonMetadata(paramarg0: FileSystem, paramarg1: Path): FileMetadata;
    static symlinkTarget(paramarg0: FileSystem, paramarg1: Path): Path;
}
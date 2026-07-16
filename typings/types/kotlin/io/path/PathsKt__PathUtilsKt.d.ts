import type { Class } from '../../../java/lang/Class.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { FileVisitor } from '../../../java/nio/file/FileVisitor.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { CopyActionResult } from '../../../kotlin/io/path/CopyActionResult.d.ts'
import type { OnErrorResult } from '../../../kotlin/io/path/OnErrorResult.d.ts'
import type { PathWalkOption } from '../../../kotlin/io/path/PathWalkOption.d.ts'
import type { PathsKt__PathRecursiveFunctionsKt } from '../../../kotlin/io/path/PathsKt__PathRecursiveFunctionsKt.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class PathsKt__PathUtilsKt extends PathsKt__PathRecursiveFunctionsKt {
    static appendText(paramarg0: Path, paramarg1: CharSequence, paramarg2: Charset): void;
    static checkFileName(paramarg0: Path): void;
    static copyToRecursively(paramarg0: Path, paramarg1: Path, paramarg2: (param0: Object, param1: Object, param2: Object) => OnErrorResult, paramarg3: boolean, paramarg4: boolean): Path;
    static copyToRecursively(paramarg0: Path, paramarg1: Path, paramarg2: (param0: Object, param1: Object, param2: Object) => OnErrorResult, paramarg3: boolean, paramarg4: (param0: Object, param1: Object, param2: Object) => CopyActionResult): Path;
    static createParentDirectories(paramarg0: Path, ...paramarg1: FileAttribute<Object>[]): Path;
    static createTempDirectory(paramarg0: Path, paramarg1: string, ...paramarg2: FileAttribute<Object>[]): Path;
    static createTempFile(paramarg0: Path, paramarg1: string, paramarg2: string, ...paramarg3: FileAttribute<Object>[]): Path;
    static deleteRecursively(paramarg0: Path): void;
    static fileAttributeViewNotAvailable(paramarg0: Path, paramarg1: Class<Object>): void;
    static fileVisitor(paramarg0: (param0: Object) => void): FileVisitor<Path>;
    static getExtension(paramarg0: Path): string;
    static getInvariantSeparatorsPathString(paramarg0: Path): string;
    static getName(paramarg0: Path): string;
    static getNameWithoutExtension(paramarg0: Path): string;
    static listDirectoryEntries(paramarg0: Path, paramarg1: string): Path[];
    static readText(paramarg0: Path, paramarg1: Charset): string;
    static relativeTo(paramarg0: Path, paramarg1: Path): Path;
    static relativeToOrNull(paramarg0: Path, paramarg1: Path): Path;
    static relativeToOrSelf(paramarg0: Path, paramarg1: Path): Path;
    static visitFileTree(paramarg0: Path, paramarg1: number, paramarg2: boolean, paramarg3: (param0: Object) => void): void;
    static visitFileTree(paramarg0: Path, paramarg1: FileVisitor<Path>, paramarg2: number, paramarg3: boolean): void;
    static walk(paramarg0: Path, ...paramarg1: PathWalkOption[]): Sequence<Path>;
    static writeText(paramarg0: Path, paramarg1: CharSequence, paramarg2: Charset, ...paramarg3: OpenOption[]): void;
}
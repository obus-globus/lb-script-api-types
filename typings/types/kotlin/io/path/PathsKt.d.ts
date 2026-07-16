import type { Class } from '../../../java/lang/Class.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { FileVisitor } from '../../../java/nio/file/FileVisitor.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { CopyActionContext } from '../../../kotlin/io/path/CopyActionContext.d.ts'
import type { CopyActionResult } from '../../../kotlin/io/path/CopyActionResult.d.ts'
import type { FileVisitorBuilder } from '../../../kotlin/io/path/FileVisitorBuilder.d.ts'
import type { OnErrorResult } from '../../../kotlin/io/path/OnErrorResult.d.ts'
import type { PathWalkOption } from '../../../kotlin/io/path/PathWalkOption.d.ts'
import type { PathsKt__PathUtilsKt } from '../../../kotlin/io/path/PathsKt__PathUtilsKt.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class PathsKt extends PathsKt__PathUtilsKt {
    static appendText(self: Path, text: CharSequence, charset: Charset): void;
    static checkFileName(self: Path): void;
    static copyToRecursively(self: Path, target: Path, onError: (param0: Path, param1: Path, param2: Exception) => OnErrorResult, followLinks: boolean, overwrite: boolean): Path;
    static copyToRecursively(self: Path, target: Path, onError: (param0: Path, param1: Path, param2: Exception) => OnErrorResult, followLinks: boolean, copyAction: (param0: CopyActionContext, param1: Path, param2: Path) => CopyActionResult): Path;
    static createParentDirectories(self: Path, ...attributes: FileAttribute<Object>[]): Path;
    static createTempDirectory(directory: Path | null, prefix: string | null, ...attributes: FileAttribute<Object>[]): Path;
    static createTempFile(directory: Path | null, prefix: string | null, suffix: string | null, ...attributes: FileAttribute<Object>[]): Path;
    static deleteRecursively(self: Path): void;
    static fileAttributeViewNotAvailable(path: Path, attributeViewClass: Class<Object>): void;
    static fileVisitor(builderAction: (param0: FileVisitorBuilder) => void): FileVisitor<Path>;
    static getExtension(paramarg0: Path): string;
    static getInvariantSeparatorsPathString(paramarg0: Path): string;
    static getName(paramarg0: Path): string;
    static getNameWithoutExtension(paramarg0: Path): string;
    static listDirectoryEntries(self: Path, glob: string): Path[];
    static readText(self: Path, charset: Charset): string;
    static relativeTo(self: Path, base: Path): Path;
    static relativeToOrNull(self: Path, base: Path): Path | null;
    static relativeToOrSelf(self: Path, base: Path): Path;
    static visitFileTree(self: Path, maxDepth: number, followLinks: boolean, builderAction: (param0: FileVisitorBuilder) => void): void;
    static visitFileTree(self: Path, visitor: FileVisitor<Path>, maxDepth: number, followLinks: boolean): void;
    static walk(self: Path, ...options: PathWalkOption[]): Sequence<Path>;
    static writeText(self: Path, text: CharSequence, charset: Charset, ...options: OpenOption[]): void;
}
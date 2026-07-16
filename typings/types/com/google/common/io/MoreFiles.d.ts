import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Traverser } from '../../../../com/google/common/graph/Traverser.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { RecursiveDeleteOption } from '../../../../com/google/common/io/RecursiveDeleteOption.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreFiles extends Object {
    static asByteSink(parampath: Path, ...paramoptions: OpenOption[]): ByteSink;
    static asByteSource(parampath: Path, ...paramoptions: OpenOption[]): ByteSource;
    static asCharSink(parampath: Path, paramcharset: Charset, ...paramoptions: OpenOption[]): CharSink;
    static asCharSource(parampath: Path, paramcharset: Charset, ...paramoptions: OpenOption[]): CharSource;
    static createParentDirectories(parampath: Path, ...paramattrs: FileAttribute<Object>[]): void;
    static deleteDirectoryContents(parampath: Path, ...paramoptions: RecursiveDeleteOption[]): void;
    static deleteRecursively(parampath: Path, ...paramoptions: RecursiveDeleteOption[]): void;
    static equal(parampath1: Path, parampath2: Path): boolean;
    static fileTraverser(): Traverser<Path>;
    static getFileExtension(parampath: Path): string;
    static getNameWithoutExtension(parampath: Path): string;
    static isDirectory(...paramoptions: LinkOption[]): (param0: Path) => boolean;
    static isRegularFile(...paramoptions: LinkOption[]): (param0: Path) => boolean;
    static listFiles(paramdir: Path): Path[];
    static touch(parampath: Path): void;
    private constructor()
}
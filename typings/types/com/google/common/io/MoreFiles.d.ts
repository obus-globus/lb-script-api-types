import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Traverser } from '../../../../com/google/common/graph/Traverser.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreFiles extends Object {
    static asByteSink(parampath: Path[][], ...paramoptions: (Object | null)[]): ByteSink;
    static asByteSource(parampath: Path[][], ...paramoptions: (Object | null)[]): ByteSource;
    static asCharSink(parampath: Path[][], paramcharset: Charset, ...paramoptions: (Object | null)[]): CharSink;
    static asCharSource(parampath: Path[][], paramcharset: Charset, ...paramoptions: (Object | null)[]): CharSource;
    static createParentDirectories(parampath: Path[][], ...paramattrs: Object | null): void;
    static deleteDirectoryContents(parampath: Path[][], ...paramoptions: (Object | null)[]): void;
    static deleteRecursively(parampath: Path[][], ...paramoptions: (Object | null)[]): void;
    static equal(parampath1: Path[][], parampath2: Path[][]): boolean;
    static fileTraverser(): Traverser<Path[][]>;
    static getFileExtension(parampath: Path[][]): string;
    static getNameWithoutExtension(parampath: Path[][]): string;
    static isDirectory(...paramoptions: (Object | null)[]): (param0: Object) => boolean;
    static isRegularFile(...paramoptions: (Object | null)[]): (param0: Object) => boolean;
    static listFiles(paramdir: Path[][]): Path[][][];
    static touch(parampath: Path[][]): void;
    private constructor()
}
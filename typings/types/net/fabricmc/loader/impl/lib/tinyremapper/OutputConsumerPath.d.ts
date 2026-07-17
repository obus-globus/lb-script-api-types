import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FileSystemReference } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/FileSystemReference.d.ts'
import type { NonClassCopyMode } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/NonClassCopyMode.d.ts'
import type { OutputConsumerPath$ResourceRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/OutputConsumerPath$ResourceRemapper.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
export class OutputConsumerPath extends Object implements Closeable, BiConsumer<string, number[]> {
    private constructor(arg0: Path, arg1: boolean, arg2: boolean, arg3: (param0: string) => boolean)
    // private classNameFilter: (param0: string) => boolean;
    // private closed: boolean;
    // private dstDir: Path;
    // private fsToClose: FileSystemReference;
    // private isJarFs: boolean;
    // private lock: Lock;
    accept(arg0: string, arg1: number[]): void;
    addNonClassFiles(arg0: Path, arg1: NonClassCopyMode, arg2: TinyRemapper): void;
    addNonClassFiles(arg0: Path, arg1: TinyRemapper, arg2: boolean, arg3: OutputConsumerPath$ResourceRemapper[]): void;
    addNonClassFiles(arg0: Path, arg1: TinyRemapper, arg2: OutputConsumerPath$ResourceRemapper[]): void;
    andThen(arg0: (param0: string, param1: number[]) => void): (param0: string, param1: number[]) => void;
    close(): void;
}
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
export interface OutputConsumerPath$ResourceRemapper extends Object{
    canTransform(arg0: TinyRemapper, arg1: Path): boolean;
    transform(arg0: Path, arg1: Path, arg2: InputStream, arg3: TinyRemapper): void;
}
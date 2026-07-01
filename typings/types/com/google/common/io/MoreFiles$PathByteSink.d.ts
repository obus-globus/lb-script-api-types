import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreFiles$PathByteSink extends ByteSink {
    constructor(arg0: Path[], arg1: OpenOption[], arg2: (param0: Object) => boolean)
    // private options: OpenOption[];
    // private path: Path[];
    openStream(): OutputStream;
    toString(): string;
}
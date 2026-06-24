import type { MoreFiles$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
export class MoreFiles$PathByteSink extends ByteSink {
    private constructor(path: Path[], options: OpenOption[])
    constructor(arg0: Path[], arg1: OpenOption[], arg2: MoreFiles$1)
    // private options: OpenOption[];
    // private path: Path[];
    openStream(): OutputStream;
    toString(): string;
}
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
export class MoreFiles$PathByteSink extends ByteSink {
    private constructor(path: Path[], options: OpenOption[])
    // private options: OpenOption[];
    // private path: Path[];
    openStream(): OutputStream;
    toString(): string;
}
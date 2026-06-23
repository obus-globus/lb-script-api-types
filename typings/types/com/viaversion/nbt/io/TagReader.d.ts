import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagReader<T extends Tag> extends Object {
    constructor(arg0: Class<T>)
    // private expectedTagType: Class<T>;
    // private named: boolean;
    // private tagLimiter: TagLimiter;
    named(): TagReader<T>;
    read(arg0: DataInput): T;
    read(arg0: InputStream): T;
    read(arg0: Path[], arg1: boolean): T;
    tagLimiter(arg0: TagLimiter): TagReader<T>;
}
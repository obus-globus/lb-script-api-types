import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagWriter extends Object {
    constructor()
    // private named: boolean;
    named(): TagWriter;
    write(arg0: DataOutput, arg1: Tag): void;
    write(arg0: OutputStream, arg1: Tag): void;
    write(arg0: Path, arg1: Tag, arg2: boolean): void;
}
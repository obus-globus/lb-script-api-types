import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSink.d.ts'
export abstract class ByteSink extends Object {
    constructor()
    asCharSink(arg0: Charset): CharSink;
    openStream(): OutputStream;
    write(arg0: number[]): void;
}
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSource.d.ts'
export abstract class ByteSource extends Object {
    constructor()
    asCharSource(arg0: Charset): CharSource;
    openBufferedStream(): InputStream;
    openStream(): InputStream;
    read(): number[];
}
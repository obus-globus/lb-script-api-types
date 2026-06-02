import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteStreams extends Object {
    static copy(paramarg0: InputStream, paramarg1: OutputStream): number;
    static toByteArray(paramarg0: InputStream): number[];
}
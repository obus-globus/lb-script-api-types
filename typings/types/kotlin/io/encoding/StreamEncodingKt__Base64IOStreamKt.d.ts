import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
export class StreamEncodingKt__Base64IOStreamKt extends Object {
    static decodingWith(paramarg0: InputStream, paramarg1: Base64): InputStream;
    static encodingWith(paramarg0: OutputStream, paramarg1: Base64): OutputStream;
}
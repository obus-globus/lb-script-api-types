import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
export class StreamEncodingKt__Base64IOStreamKt extends Object {
    static decodingWith(self: InputStream, base64: Base64): InputStream;
    static encodingWith(self: OutputStream, base64: Base64): OutputStream;
}
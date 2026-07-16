import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
import type { StreamEncodingKt__Base64IOStreamKt } from '../../../kotlin/io/encoding/StreamEncodingKt__Base64IOStreamKt.d.ts'
export class StreamEncodingKt extends StreamEncodingKt__Base64IOStreamKt {
    static decodingWith(self: InputStream, base64: Base64): InputStream;
    static encodingWith(self: OutputStream, base64: Base64): OutputStream;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { HashingSink } from '../okio/HashingSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class HashingSink$Companion extends Object {
    hmacSha1(sink: Sink, key: ByteString): HashingSink;
    hmacSha256(sink: Sink, key: ByteString): HashingSink;
    hmacSha512(sink: Sink, key: ByteString): HashingSink;
    md5(sink: Sink): HashingSink;
    sha1(sink: Sink): HashingSink;
    sha256(sink: Sink): HashingSink;
    sha512(sink: Sink): HashingSink;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { HashingSource } from '../okio/HashingSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class HashingSource$Companion extends Object {
    hmacSha1(source: Source, key: ByteString): HashingSource;
    hmacSha256(source: Source, key: ByteString): HashingSource;
    hmacSha512(source: Source, key: ByteString): HashingSource;
    md5(source: Source): HashingSource;
    sha1(source: Source): HashingSource;
    sha256(source: Source): HashingSource;
    sha512(source: Source): HashingSource;
}
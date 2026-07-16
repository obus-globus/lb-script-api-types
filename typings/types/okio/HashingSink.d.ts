import type { MessageDigest } from '../java/security/MessageDigest.d.ts'
import type { Mac } from '../javax/crypto/Mac.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { ForwardingSink } from '../okio/ForwardingSink.d.ts'
import type { HashingSink$Companion } from '../okio/HashingSink$Companion.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class HashingSink extends ForwardingSink implements Sink {
    static Companion: HashingSink$Companion;
    static hmacSha1(sink: Sink, key: ByteString): HashingSink;
    static hmacSha256(sink: Sink, key: ByteString): HashingSink;
    static hmacSha512(sink: Sink, key: ByteString): HashingSink;
    static md5(sink: Sink): HashingSink;
    static sha1(sink: Sink): HashingSink;
    static sha256(sink: Sink): HashingSink;
    static sha512(sink: Sink): HashingSink;
    constructor(sink: Sink, digest: MessageDigest)
    constructor(sink: Sink, mac: Mac)
    constructor(sink: Sink, algorithm: string)
    constructor(sink: Sink, key: ByteString, algorithm: string)
    hash(): ByteString;
    // private mac: Mac | null;
    // private messageDigest: MessageDigest | null;
    hash(): ByteString;
    write(source: Buffer, byteCount: number): void;
}
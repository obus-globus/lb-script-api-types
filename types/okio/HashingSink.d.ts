import type { MessageDigest } from '../java/security/MessageDigest.d.ts'
import type { Mac } from '../javax/crypto/Mac.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { ForwardingSink } from '../okio/ForwardingSink.d.ts'
import type { HashingSink$Companion } from '../okio/HashingSink$Companion.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class HashingSink extends ForwardingSink implements Sink {
    static Companion: HashingSink$Companion;
    static hmacSha1(paramarg0: Sink, paramarg1: ByteString): HashingSink;
    static hmacSha256(paramarg0: Sink, paramarg1: ByteString): HashingSink;
    static hmacSha512(paramarg0: Sink, paramarg1: ByteString): HashingSink;
    static md5(paramarg0: Sink): HashingSink;
    static sha1(paramarg0: Sink): HashingSink;
    static sha256(paramarg0: Sink): HashingSink;
    static sha512(paramarg0: Sink): HashingSink;
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
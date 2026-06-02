import type { MessageDigest } from '../java/security/MessageDigest.d.ts'
import type { Mac } from '../javax/crypto/Mac.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { ForwardingSource } from '../okio/ForwardingSource.d.ts'
import type { HashingSource$Companion } from '../okio/HashingSource$Companion.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class HashingSource extends ForwardingSource implements Source {
    static Companion: HashingSource$Companion;
    static hmacSha1(paramarg0: Source, paramarg1: ByteString): HashingSource;
    static hmacSha256(paramarg0: Source, paramarg1: ByteString): HashingSource;
    static hmacSha512(paramarg0: Source, paramarg1: ByteString): HashingSource;
    static md5(paramarg0: Source): HashingSource;
    static sha1(paramarg0: Source): HashingSource;
    static sha256(paramarg0: Source): HashingSource;
    static sha512(paramarg0: Source): HashingSource;
    constructor(source: Source, digest: MessageDigest)
    constructor(source: Source, mac: Mac)
    constructor(source: Source, algorithm: string)
    constructor(source: Source, key: ByteString, algorithm: string)
    hash(): ByteString;
    // private mac: Mac | null;
    // private messageDigest: MessageDigest | null;
    hash(): ByteString;
    read(sink: Buffer, byteCount: number): number;
}
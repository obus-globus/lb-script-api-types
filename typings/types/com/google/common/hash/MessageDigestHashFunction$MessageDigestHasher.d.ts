import type { AbstractByteHasher } from '../../../../com/google/common/hash/AbstractByteHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { MessageDigest } from '../../../../java/security/MessageDigest.d.ts'
export class MessageDigestHashFunction$MessageDigestHasher extends AbstractByteHasher {
    private constructor(digest: MessageDigest, bytes: number)
    // private bytes: number;
    // private digest: MessageDigest;
    // private done: boolean;
    // private checkNotDone(): void;
    hash(): HashCode;
    update(bytes: ByteBuffer): void;
    update(b: number): void;
    update(b: number[]): void;
    update(b: number[], off: number, len: number): void;
}
import type { MacHashFunction$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractByteHasher } from '../../../../com/google/common/hash/AbstractByteHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Mac } from '../../../../javax/crypto/Mac.d.ts'
export class MacHashFunction$MacHasher extends AbstractByteHasher {
    private constructor(mac: Mac)
    constructor(arg0: Mac, arg1: MacHashFunction$1)
    // private done: boolean;
    // private mac: Mac;
    // private checkNotDone(): void;
    hash(): HashCode;
    update(bytes: ByteBuffer): void;
    update(b: number): void;
    update(b: number[]): void;
    update(b: number[], off: number, len: number): void;
}
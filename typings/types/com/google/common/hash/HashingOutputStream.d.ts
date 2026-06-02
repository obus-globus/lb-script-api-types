import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class HashingOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(hashFunction: HashFunction, out: OutputStream)
    // private hasher: Hasher;
    close(): void;
    hash(): HashCode;
    write(bytes: number[], off: number, len: number): void;
    write(b: number): void;
}
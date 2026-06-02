import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class HashingInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(hashFunction: HashFunction, in_: InputStream)
    // private hasher: Hasher;
    hash(): HashCode;
    mark(readlimit: number): void;
    markSupported(): boolean;
    read(): number;
    read(bytes: number[], off: number, len: number): number;
    reset(): void;
}
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
export class HashCode$BytesHashCode extends HashCode implements Serializable {
    static fromBytes(parambytes: number[]): HashCode;
    static fromInt(paramhash: number): HashCode;
    static fromLong(paramhash: number): HashCode;
    static fromString(paramstring: string): HashCode;
    constructor(bytes: number[])
    // private bytes: number[];
    asBytes(): number[];
    asInt(): number;
    asLong(): number;
    bits(): number;
    equalsSameBits(that: HashCode): boolean;
    getBytesInternal(): number[];
    padToLong(): number;
    writeBytesToImpl(dest: number[], offset: number, maxLength: number): void;
}
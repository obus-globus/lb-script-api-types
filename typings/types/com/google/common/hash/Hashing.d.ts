import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Hashing extends Object {
    static adler32(): HashFunction;
    static combineOrdered(paramhashCodes: HashCode[]): HashCode;
    static combineUnordered(paramhashCodes: HashCode[]): HashCode;
    static concatenating(paramfirst: HashFunction, paramsecond: HashFunction, paramrest: (Object | null)[]): HashFunction;
    static concatenating(paramhashFunctions: HashFunction[]): HashFunction;
    static consistentHash(paramhashCode: HashCode, parambuckets: number): number;
    static consistentHash(paraminput: number, parambuckets: number): number;
    static crc32(): HashFunction;
    static crc32c(): HashFunction;
    static farmHashFingerprint64(): HashFunction;
    static fingerprint2011(): HashFunction;
    static goodFastHash(paramminimumBits: number): HashFunction;
    static hmacMd5(paramkey: number[]): HashFunction;
    static hmacMd5(paramkey: Key): HashFunction;
    static hmacSha1(paramkey: number[]): HashFunction;
    static hmacSha1(paramkey: Key): HashFunction;
    static hmacSha256(paramkey: number[]): HashFunction;
    static hmacSha256(paramkey: Key): HashFunction;
    static hmacSha512(paramkey: number[]): HashFunction;
    static hmacSha512(paramkey: Key): HashFunction;
    static md5(): HashFunction;
    static murmur3_128(): HashFunction;
    static murmur3_128(paramseed: number): HashFunction;
    static murmur3_32(): HashFunction;
    static murmur3_32(paramseed: number): HashFunction;
    static murmur3_32_fixed(): HashFunction;
    static murmur3_32_fixed(paramseed: number): HashFunction;
    static sha1(): HashFunction;
    static sha256(): HashFunction;
    static sha384(): HashFunction;
    static sha512(): HashFunction;
    static sipHash24(): HashFunction;
    static sipHash24(paramk0: number, paramk1: number): HashFunction;
    private constructor()
}
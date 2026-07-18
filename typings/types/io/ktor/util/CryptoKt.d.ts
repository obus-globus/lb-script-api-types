import type { Digest } from '../../../io/ktor/util/Digest.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CryptoKt extends Object {
    static NONCE_SIZE_IN_BYTES: number;
    static NONCE_SIZE_IN_CHARS: number;
    static Digest(name: string): Digest;
    static build(self: Digest, bytes: number[]): number[];
    static build(self: Digest, string: string, charset: Charset): number[];
    static generateNonce(size: number): number[];
    static generateNonce(): string;
    static generateNonceBlocking(length: number): string;
    static generateNonceSuspend(length: number): string;
    static getDigestFunction(algorithm: string, salt: (param0: string) => string): (param0: string) => number[];
    static hex(s: string): number[];
    static hex(bytes: number[]): string;
    static sha1(bytes: number[]): number[];
}
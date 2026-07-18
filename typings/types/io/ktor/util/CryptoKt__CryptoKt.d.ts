import type { Digest } from '../../../io/ktor/util/Digest.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class CryptoKt__CryptoKt extends Object {
    static build(paramarg0: Digest, paramarg1: number[], paramarg2: Continuation<Object>): Object;
    static build(paramarg0: Digest, paramarg1: string, paramarg2: Charset, paramarg3: Continuation<Object>): Object;
    static generateNonce(paramarg0: number): number[];
    static generateNonce(): string;
    static hex(paramarg0: string): number[];
    static hex(paramarg0: number[]): string;
}
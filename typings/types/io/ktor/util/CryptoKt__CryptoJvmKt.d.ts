import type { Digest } from '../../../io/ktor/util/Digest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class CryptoKt__CryptoJvmKt extends Object {
    static Digest(paramarg0: string): Digest;
    static generateNonceBlocking(paramarg0: number): string;
    static generateNonceSuspend(paramarg0: number, paramarg1: Continuation<Object>): Object;
    static getDigestFunction(paramarg0: string, paramarg1: (param0: Object) => string): (param0: string) => number[];
    static sha1(paramarg0: number[]): number[];
}
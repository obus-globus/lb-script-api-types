import type { Digest } from '../../../io/ktor/util/Digest.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class DigestImpl extends Object implements Digest {
// (invalid TS: name contains '-')     static box-impl(paramarg0: MessageDigest): DigestImpl;
// (invalid TS: name contains '-')     static build-impl(): number[];
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: MessageDigest): MessageDigest;
// (invalid TS: name contains '-')     static equals-impl(other: Object | null): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: MessageDigest, paramarg1: MessageDigest): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(): number;
// (invalid TS: name contains '-')     static plusAssign-impl(bytes: number[]): void;
// (invalid TS: name contains '-')     static reset-impl(): void;
// (invalid TS: name contains '-')     static toString-impl(): string;
    constructor(delegate: MessageDigest)
    readonly delegate: MessageDigest;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    build($completion: Continuation<number[]>): any;
    equals(other: Object | null): boolean;
    hashCode(): number;
    plusAssign(bytes: number[]): void;
    reset(): void;
    toString(): string;
}
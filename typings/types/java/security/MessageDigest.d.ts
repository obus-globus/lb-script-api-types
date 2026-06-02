import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { MessageDigestSpi } from '../../java/security/MessageDigestSpi.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class MessageDigest extends MessageDigestSpi {
    static getInstance(paramarg0: string): MessageDigest;
    static getInstance(paramarg0: string, paramarg1: string): MessageDigest;
    static getInstance(paramarg0: string, paramarg1: Provider): MessageDigest;
    static isEqual(paramarg0: number[], paramarg1: number[]): boolean;
    constructor(arg0: string)
    private constructor(arg0: string, arg1: Provider)
    readonly algorithm: string;
    readonly provider: Provider;
    // private state: number;
    clone(): Object;
    digest(): number[];
    digest(arg0: number[]): number[];
    digest(arg0: number[], arg1: number, arg2: number): number;
    getAlgorithm(): string;
    getDigestLength(): number;
    getProvider(): Provider;
    // private getProviderName(): string;
    reset(): void;
    toString(): string;
    update(arg0: ByteBuffer): void;
    update(arg0: number): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
}
import type { MessageDigest } from '../../java/security/MessageDigest.d.ts'
import type { SecureRandomParameters } from '../../java/security/SecureRandomParameters.d.ts'
import type { SecureRandomSpi } from '../../java/security/SecureRandomSpi.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
export class SecureRandom extends Random {
    static from(paramarg0: RandomGenerator): Random;
    static getInstance(paramarg0: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: { [key: string]: any }): SecureRandom;
    static getInstanceStrong(): SecureRandom;
    static getSeed(paramarg0: number): number[];
    constructor()
    constructor(arg0: SecureRandomSpi, arg1: { [key: string]: any })
    constructor(arg0: number[])
    readonly algorithm: string;
    // private counter: number;
    // private digest: MessageDigest;
    readonly provider: { [key: string]: any };
    // private randomBytes: number[];
    // private randomBytesUsed: number;
    // private secureRandomSpi: SecureRandomSpi;
    // private state: number[];
    // private threadSafe: boolean;
    generateSeed(arg0: number): number[];
    getAlgorithm(): string;
    // private getDefaultPRNG(arg0: boolean, arg1: number[]): void;
    getParameters(): SecureRandomParameters;
    getProvider(): { [key: string]: any };
    // private getProviderName(): string;
    // private getThreadSafe(): boolean;
    next(arg0: number): number;
    nextBytes(arg0: number[]): void;
    nextBytes(arg0: number[], arg1: SecureRandomParameters): void;
    reseed(): void;
    reseed(arg0: SecureRandomParameters): void;
    setSeed(arg0: number[]): void;
    setSeed(arg0: number): void;
    toString(): string;
}
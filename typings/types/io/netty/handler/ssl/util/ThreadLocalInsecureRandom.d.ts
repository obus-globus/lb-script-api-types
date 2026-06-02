import type { SecureRandom } from '../../../../../java/security/SecureRandom.d.ts'
import type { SecureRandomParameters } from '../../../../../java/security/SecureRandomParameters.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../../java/util/random/RandomGenerator.d.ts'
export class ThreadLocalInsecureRandom extends SecureRandom {
    static from(paramarg0: RandomGenerator): Random;
    static getInstance(paramarg0: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: Provider): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: Provider): SecureRandom;
    static getInstanceStrong(): SecureRandom;
    static getSeed(paramarg0: number): number[];
    private constructor()
    generateSeed(arg0: number): number[];
    getAlgorithm(): string;
    nextBoolean(): boolean;
    nextBytes(arg0: number[]): void;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextLong(): number;
    setSeed(arg0: number[]): void;
    setSeed(arg0: number): void;
}
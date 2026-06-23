import type { SecureRandom } from '../../../../../java/security/SecureRandom.d.ts'
import type { SecureRandomParameters } from '../../../../../java/security/SecureRandomParameters.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../../java/util/random/RandomGenerator.d.ts'
export class ThreadLocalInsecureRandom extends SecureRandom {
    static from(paramarg0: RandomGenerator): Random;
    static getInstance(paramarg0: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: { [key: string]: any }): SecureRandom;
    static getInstanceStrong(): SecureRandom;
    static getSeed(paramarg0: number): number[];
    private constructor()
    generateSeed(arg0: number): number[];
    getAlgorithm(): string;
    nextBoolean(): boolean;
    nextBytes(arg0: number[]): void;
    nextBytes(arg0: number[], arg1: SecureRandomParameters): void;
    nextDouble(): number;
    nextDouble(arg0: number): number;
    nextDouble(arg0: number, arg1: number): number;
    nextFloat(): number;
    nextFloat(arg0: number): number;
    nextFloat(arg0: number, arg1: number): number;
    nextGaussian(): number;
    nextGaussian(arg0: number, arg1: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    setSeed(arg0: number[]): void;
    setSeed(arg0: number): void;
}
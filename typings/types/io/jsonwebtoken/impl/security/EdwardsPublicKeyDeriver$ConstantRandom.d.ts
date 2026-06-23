import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { SecureRandomParameters } from '../../../../java/security/SecureRandomParameters.d.ts'
import type { Random } from '../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
export class EdwardsPublicKeyDeriver$ConstantRandom extends SecureRandom {
    static from(paramarg0: RandomGenerator): Random;
    static getInstance(paramarg0: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: string): SecureRandom;
    static getInstance(paramarg0: string, paramarg1: SecureRandomParameters, paramarg2: { [key: string]: any }): SecureRandom;
    static getInstanceStrong(): SecureRandom;
    static getSeed(paramarg0: number): number[];
    constructor(arg0: number[])
    // private value: number[];
    nextBytes(arg0: number[]): void;
    nextBytes(arg0: number[], arg1: SecureRandomParameters): void;
}
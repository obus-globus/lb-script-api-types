import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { SecureRandomParameters } from '../../java/security/SecureRandomParameters.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SecureRandomSpi extends Object implements Serializable {
    constructor()
    constructor(arg0: SecureRandomParameters)
    engineGenerateSeed(arg0: number): number[];
    engineGetParameters(): SecureRandomParameters;
    engineNextBytes(arg0: number[]): void;
    engineNextBytes(arg0: number[], arg1: SecureRandomParameters): void;
    engineReseed(arg0: SecureRandomParameters): void;
    engineSetSeed(arg0: number[]): void;
    toString(): string;
}
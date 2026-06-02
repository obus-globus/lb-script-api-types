import type { Class } from '../../java/lang/Class.d.ts'
import type { AlgorithmParametersSpi } from '../../java/security/AlgorithmParametersSpi.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AlgorithmParameters extends Object {
    static getInstance(paramarg0: string): AlgorithmParameters;
    static getInstance(paramarg0: string, paramarg1: string): AlgorithmParameters;
    static getInstance(paramarg0: string, paramarg1: Provider): AlgorithmParameters;
    constructor(arg0: AlgorithmParametersSpi, arg1: Provider, arg2: string)
    readonly algorithm: string;
    // private initialized: boolean;
    // private paramSpi: AlgorithmParametersSpi;
    readonly provider: Provider;
    getAlgorithm(): string;
    getEncoded(): number[];
    getEncoded(arg0: string): number[];
    getParameterSpec<T extends AlgorithmParameterSpec>(arg0: Class<T>): T;
    getProvider(): Provider;
    init(arg0: AlgorithmParameterSpec): void;
    init(arg0: number[]): void;
    init(arg0: number[], arg1: string): void;
    toString(): string;
}
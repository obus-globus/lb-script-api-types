import type { Class } from '../../java/lang/Class.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AlgorithmParametersSpi extends Object {
    constructor()
    engineGetEncoded(): number[];
    engineGetEncoded(arg0: string): number[];
    engineGetParameterSpec<T extends AlgorithmParameterSpec>(arg0: Class<T>): T;
    engineInit(arg0: AlgorithmParameterSpec): void;
    engineInit(arg0: number[]): void;
    engineInit(arg0: number[], arg1: string): void;
    engineToString(): string;
}
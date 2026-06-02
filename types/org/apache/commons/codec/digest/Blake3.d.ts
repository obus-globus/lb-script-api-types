import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Blake3$EngineState } from '../../../../../org/apache/commons/codec/digest/Blake3$EngineState.d.ts'
export class Blake3 extends Object {
    static hash(paramarg0: number[]): number[];
    static initHash(): Blake3;
    static initKeyDerivationFunction(paramarg0: number[]): Blake3;
    static initKeyedHash(paramarg0: number[]): Blake3;
    static keyedHash(paramarg0: number[], paramarg1: number[]): number[];
    private constructor(arg0: number[], arg1: number)
    // private engineState: Blake3$EngineState;
    doFinalize(arg0: number[]): Blake3;
    doFinalize(arg0: number[], arg1: number, arg2: number): Blake3;
    doFinalize(arg0: number): number[];
    reset(): Blake3;
    update(arg0: number[]): Blake3;
    update(arg0: number[], arg1: number, arg2: number): Blake3;
}
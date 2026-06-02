import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { ParameterServer } from '../../../ai/djl/training/ParameterServer.d.ts'
import type { Optimizer } from '../../../ai/djl/training/optimizer/Optimizer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LocalParameterServer extends Object implements ParameterServer {
    constructor(arg0: Optimizer)
    // private optimizer: Optimizer;
    close(): void;
    init(arg0: string, arg1: NDArray[]): void;
    update(arg0: string, arg1: NDArray[], arg2: NDArray[]): void;
    update(arg0: string, arg1: NDArray[]): void;
}
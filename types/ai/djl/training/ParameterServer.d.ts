import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ParameterServer extends AutoCloseable, Object{
    close(): void;
    init(arg0: string, arg1: NDArray[]): void;
    update(arg0: string, arg1: NDArray[]): void;
    update(arg0: string, arg1: NDArray[], arg2: NDArray[]): void;
}
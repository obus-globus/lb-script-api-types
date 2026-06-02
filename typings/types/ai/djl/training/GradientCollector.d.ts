import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface GradientCollector extends AutoCloseable, Object{
    backward(arg0: NDArray): void;
    close(): void;
    zeroGradients(): void;
}
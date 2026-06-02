import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NDResource extends AutoCloseable, Object{
    attach(arg0: NDManager): void;
    close(): void;
    detach(): void;
    getManager(): NDManager;
    getResourceNDArrays(): NDArray[];
    returnResource(arg0: NDManager): void;
    tempAttach(arg0: NDManager): void;
}
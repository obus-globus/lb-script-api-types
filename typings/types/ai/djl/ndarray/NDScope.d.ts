import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NDScope extends Object implements AutoCloseable {
    static register(paramarg0: NDArray): void;
    static unregister(paramarg0: NDArray): void;
    static unregister(...paramarg0: NDArray[]): void;
    static unregister(paramarg0: (Object | null)[]): void;
    constructor()
    // private resources: Map<NDArray, NDArray>;
    close(): void;
    suppressNotUsedWarning(): void;
}
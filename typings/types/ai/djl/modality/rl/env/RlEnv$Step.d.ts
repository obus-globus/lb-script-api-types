import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RlEnv$Step extends AutoCloseable, Object{
    close(): void;
    getAction(): (Object | null)[];
    getPostActionSpace(): (Object | null)[];
    getPostObservation(): (Object | null)[];
    getPreObservation(): (Object | null)[];
    getReward(): NDArray;
    isDone(): boolean;
}
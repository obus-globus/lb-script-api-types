import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChunkResult<T extends Object | number | string | boolean> extends Object {
    getError(): string;
    ifSuccess(consumer: (param0: T) => void): ChunkResult<T>;
    isSuccess(): boolean;
    map(map: (param0: T) => R): ChunkResult<R>;
    orElse(orElse: T): T;
    orElseThrow(exceptionSupplier: () => E): T;
}
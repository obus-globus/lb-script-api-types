import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface ChunkResult<T extends unknown> extends Object {
    getError(): string;
    ifSuccess(consumer: (param0: T) => void): ChunkResult<T>;
    isSuccess(): boolean;
    map<R extends unknown>(map: (param0: T) => R): ChunkResult<R>;
    orElse(orElse: T): T;
    orElseThrow<E extends Throwable>(exceptionSupplier: () => E): T;
}
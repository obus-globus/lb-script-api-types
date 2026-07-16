import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
export class ChunkResult$Fail<T extends unknown> extends Record implements ChunkResult<T> {
    static error<T extends unknown>(paramerror: string): ChunkResult<T>;
    static error<T extends unknown>(paramerrorSupplier: () => string): ChunkResult<T>;
    static of<T extends unknown>(paramvalue: T): ChunkResult<T>;
    static orElse<R extends unknown>(paramchunkResult: ChunkResult<R>, paramorElse: R): R;
    constructor(error: () => string)
    equals(o: Object | null): boolean;
    error(): () => string;
    getError(): string;
    hashCode(): number;
    ifSuccess(consumer: (param0: T) => void): ChunkResult<T>;
    isSuccess(): boolean;
    map<R extends unknown>(map: (param0: T) => R): ChunkResult<R>;
    orElse(orElse: T): T;
    orElseThrow<E extends Throwable>(exceptionSupplier: () => E): T;
    toString(): string;
}
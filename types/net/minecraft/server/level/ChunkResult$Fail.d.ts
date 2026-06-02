import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
export class ChunkResult$Fail<T extends Object | number | string | boolean> extends Record implements ChunkResult<T> {
    static error(paramerror: string): ChunkResult<Object>;
    static error(paramerrorSupplier: () => string): ChunkResult<Object>;
    static of(paramvalue: Object | null): ChunkResult<Object>;
    static orElse(paramchunkResult: ChunkResult<Object>, paramorElse: Object | null): Object | null;
    constructor(error: () => string)
    readonly error: () => string;
    equals(o: Object | null): boolean;
    error(): () => string;
    getError(): string;
    hashCode(): number;
    ifSuccess(consumer: (param0: T) => void): ChunkResult<T>;
    isSuccess(): boolean;
    map(map: (param0: T) => R): ChunkResult<R>;
    orElse(orElse: T): T;
    orElseThrow(exceptionSupplier: () => E): T;
    toString(): string;
}
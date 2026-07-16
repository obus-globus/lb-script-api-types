import type { CodecException } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/CodecException.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class Result$Success<T extends unknown> extends Object implements Result<T> {
    static error<T extends unknown>(paramarg0: string): Result<T>;
    static error<T extends unknown>(paramarg0: Throwable): Result<T>;
    static mergeErrors<T extends unknown>(paramarg0: string, paramarg1: Result<Object>[]): Result<T>;
    static success<T extends unknown>(paramarg0: T): Result<T>;
    static unexpected<T extends unknown>(paramarg0: Object, ...paramarg1: Class<Object>[]): Result<T>;
    static unexpected<T extends unknown>(paramarg0: Object, ...paramarg1: string[]): Result<T>;
    constructor(arg0: Object, arg1: any)
    // private result: T;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    get(): T;
    getError(): CodecException;
    getOrThrow(arg0: (param0: Throwable) => Throwable): T;
    hashCode(): number;
    isError(): boolean;
    isSuccessful(): boolean;
    map<N extends unknown>(arg0: (param0: T) => N): Result<N>;
    mapError<N extends unknown>(): Result<N>;
    mapResult<N extends unknown>(arg0: (param0: T) => Result<N>): Result<N>;
    orElse(arg0: T): T;
    orElseThrow(arg0: (param0: Throwable) => Throwable): T;
    toString(): string;
}
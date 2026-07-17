import type { CodecException } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/CodecException.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class Result$Error<T extends unknown> extends Object implements Result<T> {
    private constructor(arg0: CodecException)
    readonly error: CodecException;
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
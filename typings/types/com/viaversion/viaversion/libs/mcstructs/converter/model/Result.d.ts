import type { CodecException } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/CodecException.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export interface Result<T extends Object | number | string | boolean> extends Object {
    get(): T;
    getError(): CodecException;
    getOrThrow(arg0: (param0: Throwable) => Throwable): T;
    isError(): boolean;
    isSuccessful(): boolean;
    map<N extends Object | number | string | boolean>(arg0: (param0: T) => N): Result<N>;
    mapError<N extends Object | number | string | boolean>(): Result<N>;
    mapResult<N extends Object | number | string | boolean>(arg0: (param0: T) => Result<N>): Result<N>;
    orElse(arg0: T): T;
    orElseThrow(arg0: (param0: Throwable) => Throwable): T;
}
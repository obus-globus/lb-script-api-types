import type { Either } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Either$Left<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements Either<L, R> {
    static left(paramarg0: Object | null): Either<Object, Object>;
    static right(paramarg0: Object | null): Either<Object, Object>;
    static unwrap(paramarg0: Either<Object, Object>): Object | null;
    private constructor(arg0: L)
    readonly left: L;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    isLeft(): boolean;
    isRight(): boolean;
    map(arg0: (param0: L) => ML, arg1: (param0: R) => MR): Either<ML, MR>;
    swap(): Either<R, L>;
    toString(): string;
    xmap<T extends Object | number | string | boolean>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
}
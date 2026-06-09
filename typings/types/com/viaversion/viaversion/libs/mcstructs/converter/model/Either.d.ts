import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Either<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    getLeft(): L;
    getRight(): R;
    isLeft(): boolean;
    isRight(): boolean;
    map(arg0: (param0: L) => ML, arg1: (param0: R) => MR): Either<ML, MR>;
    swap(): Either<R, L>;
    xmap<T extends Object | number | string | boolean>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
}
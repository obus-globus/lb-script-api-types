import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Either<L extends unknown, R extends unknown> extends Object {
    getLeft(): L;
    getRight(): R;
    isLeft(): boolean;
    isRight(): boolean;
    map<ML extends unknown, MR extends unknown>(arg0: (param0: L) => ML, arg1: (param0: R) => MR): Either<ML, MR>;
    swap(): Either<R, L>;
    xmap<T extends unknown>(arg0: (param0: L) => T, arg1: (param0: R) => T): T;
}
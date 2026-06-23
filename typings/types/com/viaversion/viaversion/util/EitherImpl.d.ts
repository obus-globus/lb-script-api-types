import type { Either } from '../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EitherImpl<X extends unknown, Y extends unknown> extends Object implements Either<X, Y> {
    static left(paramarg0: Object | null): Either<Object, Object>;
    static right(paramarg0: Object | null): Either<Object, Object>;
    constructor(arg0: X, arg1: Y)
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isLeft(): boolean;
    isRight(): boolean;
    left(): X;
    right(): Y;
    toString(): string;
}
import type { Either } from '../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EitherImpl<X extends unknown, Y extends unknown> extends Object implements Either<X, Y> {
    static left<X extends unknown, Y extends unknown>(paramarg0: X): Either<X, Y>;
    static right<X extends unknown, Y extends unknown>(paramarg0: Y): Either<X, Y>;
    constructor(arg0: X, arg1: Y)
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isLeft(): boolean;
    isRight(): boolean;
    left(): X;
    right(): Y;
    toString(): string;
}
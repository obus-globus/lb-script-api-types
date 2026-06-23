import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Either<X extends unknown, Y extends unknown> extends Object{
    isLeft(): boolean;
    isRight(): boolean;
    left(): X;
    right(): Y;
}
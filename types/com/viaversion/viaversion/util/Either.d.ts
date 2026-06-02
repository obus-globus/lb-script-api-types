import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Either<X extends Object | number | string | boolean, Y extends Object | number | string | boolean> extends Object{
    isLeft(): boolean;
    isRight(): boolean;
    left(): X;
    right(): Y;
}
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetC$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetC$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForgetC<R extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<ReForgetC$Mu<R>, A, B>, Object {
    impl(): Either<(param0: R) => B, (param0: A, param1: R) => B>;
    run(arg0: A, arg1: R): B;
}
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetE$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetE$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForgetE<R extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<ReForgetE$Mu<R>, A, B>, Object{
    run(arg0: Either<A, R>): B;
}
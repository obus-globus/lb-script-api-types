import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ForgetE$Mu } from '../../../../com/mojang/datafixers/optics/ForgetE$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ForgetE<R extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends App2<ForgetE$Mu<R>, A, B>, Object{
    run(arg0: A): Either<B, R>;
}
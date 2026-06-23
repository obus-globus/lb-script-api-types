import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { ReForgetEP$Mu } from '../../../../com/mojang/datafixers/optics/ReForgetEP$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReForgetEP<R extends unknown, A extends unknown, B extends unknown> extends App2<ReForgetEP$Mu<R>, A, B>, Object{
    run(arg0: Either<A, Pair<A, R>>): B;
}